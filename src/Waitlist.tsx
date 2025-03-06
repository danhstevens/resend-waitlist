"use client";
import React, { useState } from "react";

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
  }) => Promise<void> | void;
}

const Waitlist: React.FC<WaitlistProps> = ({
  mode = "light",
  title = "Join our waitlist!",
  titleColor,
  subtitle,
  showNameField = true,
  successTitle = "You've been added to the waitlist!",
  successSubtitle = "We'll let you know when we're ready.",
  rejectDisposable = true,
  onSubmit,
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const isDark = mode === "dark";

  // Basic email validation
  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  // Button is disabled if:
  // - name is required and not provided
  // - or invalid email
  const buttonDisabled = showNameField
    ? !fullName.trim() || !isValidEmail(email)
    : !isValidEmail(email);

  const handleSubmit = async () => {
    setFormSubmitted(true);
    setError("");

    if (!isValidEmail(email)) {
      return;
    }

    setLoading(true);

    try {
      // Check if the email is disposable
      if (rejectDisposable) {
        const response = await fetch(
          `https://open.kickbox.com/v1/disposable/${email}`
        );
        const data = await response.json();
        if (data.disposable) {
          setError("Disposable email addresses are not allowed.");
          return;
        }
      }

      const response = await onSubmit({
        email,
        fullName: showNameField ? fullName : undefined,
      });
      // TODO handle response
      setSuccess(true);
    } catch (err) {
      setError("Could not add your email to the waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        className={`
          ${isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-gray-800"}
          p-6 rounded-md shadow-md max-w-sm mx-auto
        `}
      >
        <div className="flex flex-col items-center text-center">
          {/* Success icon */}
          <svg
            className="h-12 w-12 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-xl font-bold mb-2">{successTitle}</h2>
          <p className="text-sm">{successSubtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`
        ${isDark ? "bg-zinc-900 text-zinc-100" : "bg-white text-gray-800"}
        p-6 rounded-md shadow-md max-w-sm mx-auto
      `}
      onSubmit={(e) => {
        e.preventDefault();
        if (!buttonDisabled) {
          handleSubmit();
        }
      }}
    >
      {/* Title */}
      <h2
        className="text-center text-3xl font-medium mb-2"
        style={
          titleColor && titleColor.includes("gradient")
            ? {
                backgroundImage: titleColor,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }
            : titleColor
            ? { color: titleColor }
            : {}
        }
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && <p className="text-center mb-6 leading-snug">{subtitle}</p>}

      {/* Full Name field (optional) */}
      {showNameField && (
        <div className="mb-4">
          <div
            className={`flex items-center rounded-md border px-2
              ${
                isDark
                  ? "border-zinc-700 bg-zinc-800"
                  : "border-gray-300 bg-white"
              }
            `}
          >
            {/* User icon */}
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <input
              type="text"
              placeholder="Full name..."
              className={`w-full py-2 text-sm focus:outline-none
                ${
                  isDark
                    ? "bg-zinc-800 text-zinc-100"
                    : "bg-white text-gray-800"
                }
              `}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
        </div>
      )}

      {/* Email field */}
      <div className="mb-4">
        <div
          className={`flex items-center rounded-md border px-2
            ${
              isDark
                ? "border-zinc-700 bg-zinc-800"
                : "border-gray-300 bg-white"
            }
          `}
        >
          {/* Email icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <input
            type="email"
            placeholder="Email address.."
            className={`w-full py-2 text-sm focus:outline-none
              ${isDark ? "bg-zinc-800 text-zinc-100" : "bg-white text-gray-800"}
            `}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
          />
        </div>
        {/* Email error message */}
        {formSubmitted && !isValidEmail(email) && email.trim().length > 0 && (
          <p className="text-red-500 text-xs mt-1">
            Please enter a valid email address.
          </p>
        )}
      </div>

      {/* Error from the API call (if any) */}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      {/* Button */}
      <button
        type="submit"
        disabled={buttonDisabled || loading}
        className={`w-full py-2 px-4 flex items-center justify-center rounded-md font-light text-sm mt-2 ${
          isDark ? "bg-zinc-800" : "bg-zinc-100"
        }
          ${buttonDisabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        {loading ? (
          <>
            Please wait...
            <svg
              className="animate-spin h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 12a8 8 0 018-8v0a8 8 0 018 8v0a8 8 0 01-8 8v0a8 8 0 01-8-8v0z"
              />
            </svg>
          </>
        ) : (
          <>
            Join the waitlist
            <svg
              className="h-5 w-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0-5 5m5-5H6"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};

export default Waitlist;
