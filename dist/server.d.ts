import * as resend from 'resend';
import { Resend } from 'resend';
import { Ratelimit } from '@upstash/ratelimit';

interface ResendWaitlistProps {
    apiKey: string;
    audienceId: string;
    upstashUrl?: string;
    upstashToken?: string;
    ratePerMinute?: number;
}
declare class ResendWaitlist {
    resend: Resend;
    audienceId: string;
    rateLimiter?: Ratelimit;
    constructor({ apiKey, audienceId, upstashUrl, upstashToken, ratePerMinute }: ResendWaitlistProps);
    addToWaitlist(email: string, fullName?: string): Promise<resend.CreateContactResponse>;
}

export { ResendWaitlist };
