# resend-waitlist

A standalone React component to collect waitlist signups with the [Resend API](https://resend.com). Ships with:

- Configurable **light/dark** mode
- Customizable gradient titles
- Optional **Full Name** field
- Build in form validation
- Disposable domain filtering
- Configurable rate limiting

---

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Configuration](#configuration)
- [License](#license)

---

## Installation

```bash
npm install https://github.com/danhstevens/resend-waitlist.git
# or
yarn add https://github.com/danhstevens/resend-waitlist.git
# or
pnpm add https://github.com/danhstevens/resend-waitlist.git
```

## Usage

1. Import the component:

```tsx
"use client";
import React from "react";
import { Waitlist } from "resend-waitlist";
import { yourServerSideAction } from "@/app/actions"; // For Next.JS projects, define a server-side action

const handleSubmit = async (data: { email: string; fullName?: string }) => {
  const { email, fullName } = data;

  await yourServerSideAction(email, fullName);
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
  const result = await resendWaitlist.addToWaitlist(email, fullName);
  if (result.error) {
    throw new Error(result.error.message);
  }

  return { status: 200, body: "Success" };
}
```

## Props

| Prop             | Type                  | Default                                | Description                                                                                                     |
| ---------------- | --------------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| mode             | 'light' \| 'dark'     | 'light'                                | Switches light or dark color scheme.                                                                            |
| title            | string                | 'Join our waitlist!'                   | Form heading text.                                                                                              |
| subtitle         | string                | undefined                              | Text below the title                                                                                            |
| titleColor       | string                | inherited                              | CSS color or gradient. If it’s a gradient, the text will be clipped accordingly (.e.g. "linear-gradient(...)".) |
| showNameField    | boolean               | true                                   | Whether to show the “Full Name” input.                                                                          |
| successTitle     | string                | "You've been added to the waitlist!"   | Headline text shown after successful submission.                                                                |
| successSubtitle  | string                | "We'll let you know when we're ready." | Subtext shown after successful submission.                                                                      |
| rejectDisposable | boolean               | true                                   | Whether to reject disposable email domains (ex: mailinator.com)                                                 |
| onSubmit         | Promise<void> \| void | void                                   | Function to call on valid submit event                                                                          |

## Resend API

- Sign up for [Resend](https://resend.com/).
- Retrieve your API key (e.g. re_abc123).
- Retrieve your [Audience ID](https://resend.com/audiences)

## License

MIT License

You are free to use, modify, and distribute this code as allowed by the MIT license.
