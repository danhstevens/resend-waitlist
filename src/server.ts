import { Resend } from 'resend';
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

interface ResendWaitlistProps {
  apiKey: string;
  audienceId: string;
  upstashUrl?: string;
  upstashToken?: string;
  ratePerMinute?: number;
}

export class ResendWaitlist {
  resend: Resend;
  audienceId: string;
  rateLimiter?: Ratelimit;

  constructor({ apiKey, audienceId, upstashUrl, upstashToken, ratePerMinute }: ResendWaitlistProps) {
    // Resend params
    this.audienceId = audienceId;
    this.resend = new Resend(apiKey);

    // Rate limit params
    if (upstashUrl && upstashToken) {
      this.rateLimiter = new Ratelimit({
        redis: new Redis({ url: upstashUrl, token: upstashToken }),
        limiter: Ratelimit.slidingWindow(ratePerMinute || 10, "60 s"),
        prefix: "@upstash/ratelimit",
        analytics: true
      });
    }
  }

  async addToWaitlist(email: string, fullName?: string) {
    try {
      if (this.rateLimiter) {
        const { success } = await this.rateLimiter.limit("waitlist");
        if (!success) {
          return { success: false, error: "Woah, slow down there buddy! Rate limit exceeded." };
        }
      }

      const nameParts = fullName?.trim().split(/\s+/);
      const result = await this.resend.contacts.create({
        email: email.trim().toLowerCase(),
        firstName: nameParts?.[0],
        lastName: nameParts?.[1] ? nameParts.slice(1).join(" ") : undefined,
        audienceId: this.audienceId
      });
      if (result.error) {
        return { success: false, error: result.error.message };
      }
    } catch (err) {
      console.error(err); // unexpected error, log to the server for debugging
      return { success: false, error: "Could not add your email to the waitlist. Please try again." };
    }

    return { success: true };
  }
}