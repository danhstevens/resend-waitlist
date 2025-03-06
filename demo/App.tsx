import React from "react";
import Waitlist from "../src/Waitlist";

export default function App() {
  return (
    <div className="bg-black p-4">
      <h1 className="text-white text-4xl font-bold">Resend Waitlist Demo</h1>
      <p className="text-white text-base mt-2">
        Below is our waitlist component in different configurations.
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <div className="flex-1">
          <h2 className="text-white">
            Light Mode (default) with Full Name field
          </h2>
          <Waitlist
            mode="light"
            titleColor="linear-gradient(to right, #7928CA, #FF0080)"
            onSubmit={() => {}}
          />
        </div>
        <div className="flex-1">
          <h2 className="text-white">Dark Mode, custom configuration</h2>
          <Waitlist
            mode="dark"
            title="Sign up to be first!"
            titleColor="linear-gradient(to right, #7928CA, #FF0080)"
            showNameField={true}
            successHeadline="Thanks for signing up!"
            successSubtext="We'll keep you in the loop."
            onSubmit={() => {}}
          />
        </div>
      </div>
    </div>
  );
}
