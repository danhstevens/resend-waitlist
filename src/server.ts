import { Resend } from 'resend';

export class ResendWaitlist {
  resend: Resend;
  audienceId: string;

  constructor(apiKey: string, audienceId: string) {
    this.audienceId = audienceId;
    this.resend = new Resend(apiKey);
  }

  async addToWaitlist(email: string, fullName?: string) {
    return await this.resend.contacts.create({ email, audienceId: this.audienceId });
  }
}