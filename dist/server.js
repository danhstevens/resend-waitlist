"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/server.ts
var server_exports = {};
__export(server_exports, {
  ResendWaitlist: () => ResendWaitlist
});
module.exports = __toCommonJS(server_exports);
var import_resend = require("resend");
var import_ratelimit = require("@upstash/ratelimit");
var import_redis = require("@upstash/redis");
var ResendWaitlist = class {
  resend;
  audienceId;
  rateLimiter;
  constructor({ apiKey, audienceId, upstashUrl, upstashToken, ratePerMinute }) {
    this.audienceId = audienceId;
    this.resend = new import_resend.Resend(apiKey);
    if (upstashUrl && upstashToken) {
      this.rateLimiter = new import_ratelimit.Ratelimit({
        redis: new import_redis.Redis({ url: upstashUrl, token: upstashToken }),
        limiter: import_ratelimit.Ratelimit.slidingWindow(ratePerMinute || 10, "60 s"),
        prefix: "@upstash/ratelimit",
        analytics: true
      });
    }
  }
  async addToWaitlist(email, fullName) {
    if (this.rateLimiter) {
      const { success, limit, remaining, pending } = await this.rateLimiter.limit("waitlist");
      if (!success) {
        throw new Error(`Woah, slow down there buddy! Rate limit exceeded.`);
      }
    }
    const nameParts = fullName?.trim().split(/\s+/);
    return await this.resend.contacts.create({
      email: email.trim().toLowerCase(),
      firstName: nameParts?.[0],
      lastName: nameParts?.[1] ? nameParts.slice(1).join(" ") : void 0,
      audienceId: this.audienceId
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ResendWaitlist
});
//# sourceMappingURL=server.js.map