import React from 'react';

interface WaitlistProps {
    /** Light or dark mode (zinc scheme for dark) */
    mode?: "light" | "dark";
    /** The waitlist form title */
    title?: string;
    /**
     * CSS color or gradient for the title text.
     * e.g. "linear-gradient(to right, #7928CA, #FF0080)"
     */
    titleColor?: string;
    /** Optional subtitle */
    subtitle: string;
    /** Whether to show the "Full Name" field */
    showNameField?: boolean;
    /** Success message title */
    successTitle?: string;
    /** Success message subtitle */
    successSubtitle?: string;
    /** Whether to reject disposable email addresses */
    rejectDisposable?: boolean;
    /** Handler function for when the form is submitted */
    onSubmit: (data: {
        email: string;
        fullName?: string;
    }) => Promise<{
        success: boolean;
        error?: string;
    }>;
}
declare const Waitlist: React.FC<WaitlistProps>;

export { Waitlist };
