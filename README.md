# resend-waitlist

A standalone React component to collect waitlist signups with the [Resend API](https://resend.com). Ships with:

- Configurable **light/dark** mode
- Customizable gradient titles
- Optional **Full Name** field
- Build in form validation
- Disposable domain filtering
- Configurable rate limiting

---

![image](https://github.com/user-attachments/assets/10431970-fe3a-48d0-b8d3-ca5f7c480dee)

### Live Demo: https://resend-waitlist-demo.vercel.app/

## Installation

```bash
npm install https://github.com/danhstevens/resend-waitlist.git
# or
yarn add https://github.com/danhstevens/resend-waitlist.git
# or
pnpm add https://github.com/danhstevens/resend-waitlist.git
```

## Sign Up for Resend & Get Your API Credentials

- Sign up for [Resend](https://resend.com/).
- Retrieve your API key (e.g. re_abc123).
- Retrieve your [Audience ID](https://resend.com/audiences)
- Optionally, to add ratelimiting, sign up for [Upstash](https://upstash.com/) and generate an Upstash URL and Token

## Usage

1. Import the component:

```tsx
"use client";
import React from "react";
import { Waitlist } from "resend-waitlist";
import { yourServerSideAction } from "@/app/actions"; // For Next.JS projects, define a server-side action

const handleSubmit = async (data: { email: string; fullName?: string }) => {
  const { email, fullName } = data;
  const result = await yourServerSideAction(email, fullName);
  if (!result.success) {
    return { success: false, error: result.error };
  }
  return { success: true };
};

export default function MyPage() {
  return (
    <div>
      <Waitlist
        mode="dark"
        title="Sign up to join our waitlist!"
        titleColor="linear-gradient(to right, #7928CA, #FF0080)"
        subtitle="Join now to gain early access to our product."
        showNameField={true}
        successTitle="Thank you!"
        successSubtitle="We will get in touch soon."
        rejectDisposable={true}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
```

2. Define a server-side action

```tsx
// Note: This is a Next.JS App Router Example
"use server";
import { headers } from "next/headers";
import { ResendWaitlist } from "resend-waitlist/server";

const waitlistOptions = {
  // Resend configuration parameters (required)
  apiKey: process.env.RESEND_API_KEY!,
  audienceId: process.env.RESEND_AUDIENCE_ID!,
  // Upstash configuration for ratelimiting (optional)
  upstashUrl: process.env.RESEND_RATELIMIT_UPSTASH_URL!,
  upstashToken: process.env.RESEND_RATELIMIT_UPSTASH_TOKEN!,
  ratePerMinute: 5, // Default 5
};
const resendWaitlist = new ResendWaitlist(waitlistOptions);

export async function yourServerSideAction(email: string, fullName?: string) {
  // If ratelimiting, get the client IP
  const headersList = headers();
  // const headersList = await headers(); // <-- or for Next.JS 15+
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0] ||
    headersList.get("x-real-ip") ||
    "unknown";

  const result = await resendWaitlist.addToWaitlist(email, fullName, ip);
  if (!result.success) {
    return { success: false, error: result.error };
  }

  return { success: true };
}
```

3. Create an `.env.local` file

```
# Required
RESEND_API_KEY=re_...
RESEND_AUDIENCE_ID=...
# Optional
RESEND_RATELIMIT_UPSTASH_URL=...
RESEND_RATELIMIT_UPSTASH_TOKEN=...
RESEND_RATELIMIT_SUBMISSIONS_PER_MINUTE=5
```

## Waitlist Component Props

| Prop             | Type                                          | Default                                | Description                                                                                                     |
| ---------------- | --------------------------------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| mode             | 'light' \| 'dark'                             | 'light'                                | Switches light or dark color scheme.                                                                            |
| title            | string                                        | 'Join our waitlist!'                   | Form heading text.                                                                                              |
| subtitle         | string                                        | undefined                              | Text below the title                                                                                            |
| titleColor       | string                                        | inherited                              | CSS color or gradient. If it’s a gradient, the text will be clipped accordingly (.e.g. "linear-gradient(...)".) |
| showNameField    | boolean                                       | true                                   | Whether to show the “Full Name” input.                                                                          |
| successTitle     | string                                        | "You've been added to the waitlist!"   | Headline text shown after successful submission.                                                                |
| successSubtitle  | string                                        | "We'll let you know when we're ready." | Subtext shown after successful submission.                                                                      |
| rejectDisposable | boolean                                       | true                                   | Whether to reject disposable email domains (ex: mailinator.com)                                                 |
| onSubmit         | Promise<{ success: boolean; error?: string; } | -                                      | Function to call on valid submit event                                                                          |

## License

MIT License

You are free to use, modify, and distribute this code as allowed by the MIT license.
