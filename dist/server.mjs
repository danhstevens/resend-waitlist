// src/server.ts
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
var ResendWaitlist = class {
  resend;
  audienceId;
  rateLimiter;
  constructor({ apiKey, audienceId, upstashUrl, upstashToken, ratePerMinute }) {
    this.audienceId = audienceId;
    this.resend = new Resend(apiKey);
    if (upstashUrl && upstashToken) {
      this.rateLimiter = new Ratelimit({
        redis: new Redis({ url: upstashUrl, token: upstashToken }),
        limiter: Ratelimit.slidingWindow(ratePerMinute || 10, "60 s"),
        prefix: "@upstash/ratelimit",
        analytics: true
      });
    }
  }
  async addToWaitlist(email, fullName, ip) {
    try {
      if (this.rateLimiter && ip) {
        const { success } = await this.rateLimiter.limit(ip);
        if (!success) {
          return { success: false, error: "Woah, slow down there buddy! Rate limit exceeded." };
        }
      }
      const nameParts = fullName?.trim().split(/\s+/);
      const result = await this.resend.contacts.create({
        email: email.trim().toLowerCase(),
        firstName: nameParts?.[0],
        lastName: nameParts?.[1] ? nameParts.slice(1).join(" ") : void 0,
        audienceId: this.audienceId
      });
      if (result.error) {
        return { success: false, error: result.error.message };
      }
    } catch (err) {
      console.error(err);
      return { success: false, error: "Could not add your email to the waitlist. Please try again." };
    }
    return { success: true };
  }
};
export {
  ResendWaitlist
};
//# sourceMappingURL=server.mjs.map