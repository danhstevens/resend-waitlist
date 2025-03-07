// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined")
    return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/compiled.css
styleInject('*,\n:after,\n:before {\n  --tw-border-spacing-x:0;\n  --tw-border-spacing-y:0;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness:proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59,130,246,.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n  --tw-shadow:0 0 #0000;\n  --tw-shadow-colored:0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n::backdrop {\n  --tw-border-spacing-x:0;\n  --tw-border-spacing-y:0;\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  --tw-pan-x: ;\n  --tw-pan-y: ;\n  --tw-pinch-zoom: ;\n  --tw-scroll-snap-strictness:proximity;\n  --tw-gradient-from-position: ;\n  --tw-gradient-via-position: ;\n  --tw-gradient-to-position: ;\n  --tw-ordinal: ;\n  --tw-slashed-zero: ;\n  --tw-numeric-figure: ;\n  --tw-numeric-spacing: ;\n  --tw-numeric-fraction: ;\n  --tw-ring-inset: ;\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59,130,246,.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n  --tw-shadow:0 0 #0000;\n  --tw-shadow-colored:0 0 #0000;\n  --tw-blur: ;\n  --tw-brightness: ;\n  --tw-contrast: ;\n  --tw-grayscale: ;\n  --tw-hue-rotate: ;\n  --tw-invert: ;\n  --tw-saturate: ;\n  --tw-sepia: ;\n  --tw-drop-shadow: ;\n  --tw-backdrop-blur: ;\n  --tw-backdrop-brightness: ;\n  --tw-backdrop-contrast: ;\n  --tw-backdrop-grayscale: ;\n  --tw-backdrop-hue-rotate: ;\n  --tw-backdrop-invert: ;\n  --tw-backdrop-opacity: ;\n  --tw-backdrop-saturate: ;\n  --tw-backdrop-sepia: ;\n  --tw-contain-size: ;\n  --tw-contain-layout: ;\n  --tw-contain-paint: ;\n  --tw-contain-style: ;\n}\n/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n  border: 0 solid #e5e7eb;\n}\n:after,\n:before {\n  --tw-content:"";\n}\n:host,\nhtml {\n  line-height: 1.5;\n  -webkit-text-size-adjust: 100%;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol,\n    Noto Color Emoji;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  -webkit-tap-highlight-color: transparent;\n}\nbody {\n  margin: 0;\n  line-height: inherit;\n}\nhr {\n  height: 0;\n  color: inherit;\n  border-top-width: 1px;\n}\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n  text-decoration: underline dotted;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\na {\n  color: inherit;\n  text-decoration: inherit;\n}\nb,\nstrong {\n  font-weight: bolder;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    Liberation Mono,\n    Courier New,\n    monospace;\n  font-feature-settings: normal;\n  font-variation-settings: normal;\n  font-size: 1em;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -.25em;\n}\nsup {\n  top: -.5em;\n}\ntable {\n  text-indent: 0;\n  border-color: inherit;\n  border-collapse: collapse;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-feature-settings: inherit;\n  font-variation-settings: inherit;\n  font-size: 100%;\n  font-weight: inherit;\n  line-height: inherit;\n  letter-spacing: inherit;\n  color: inherit;\n  margin: 0;\n  padding: 0;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\ninput:where([type=button]),\ninput:where([type=reset]),\ninput:where([type=submit]) {\n  -webkit-appearance: button;\n  background-color: transparent;\n  background-image: none;\n}\n:-moz-focusring {\n  outline: auto;\n}\n:-moz-ui-invalid {\n  box-shadow: none;\n}\nprogress {\n  vertical-align: baseline;\n}\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n[type=search] {\n  -webkit-appearance: textfield;\n  outline-offset: -2px;\n}\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\nsummary {\n  display: list-item;\n}\nblockquote,\ndd,\ndl,\nfigure,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n}\nfieldset,\nlegend {\n  padding: 0;\n}\nmenu,\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\ndialog {\n  padding: 0;\n}\ntextarea {\n  resize: vertical;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n[role=button],\nbutton {\n  cursor: pointer;\n}\n:disabled {\n  cursor: default;\n}\naudio,\ncanvas,\nembed,\niframe,\nimg,\nobject,\nsvg,\nvideo {\n  display: block;\n  vertical-align: middle;\n}\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n[hidden]:where(:not([hidden=until-found])) {\n  display: none;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mb-2 {\n  margin-bottom: .5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.ml-2 {\n  margin-left: .5rem;\n}\n.mr-2 {\n  margin-right: .5rem;\n}\n.mt-1 {\n  margin-top: .25rem;\n}\n.mt-2 {\n  margin-top: .5rem;\n}\n.flex {\n  display: flex;\n}\n.h-20 {\n  height: 5rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.w-20 {\n  width: 5rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-full {\n  width: 100%;\n}\n.min-w-0 {\n  min-width: 0;\n}\n.max-w-md {\n  max-width: 28rem;\n}\n@keyframes spin {\n  to {\n    transform: rotate(1turn);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-center {\n  justify-content: center;\n}\n.rounded-md {\n  border-radius: .375rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-gray-300 {\n  --tw-border-opacity:1;\n  border-color: rgb(209 213 219/var(--tw-border-opacity,1));\n}\n.border-zinc-700 {\n  --tw-border-opacity:1;\n  border-color: rgb(63 63 70/var(--tw-border-opacity,1));\n}\n.bg-white {\n  --tw-bg-opacity:1;\n  background-color: rgb(255 255 255/var(--tw-bg-opacity,1));\n}\n.bg-zinc-100 {\n  --tw-bg-opacity:1;\n  background-color: rgb(244 244 245/var(--tw-bg-opacity,1));\n}\n.bg-zinc-800 {\n  --tw-bg-opacity:1;\n  background-color: rgb(39 39 42/var(--tw-bg-opacity,1));\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-1 {\n  padding-left: .25rem;\n  padding-right: .25rem;\n}\n.px-3 {\n  padding-left: .75rem;\n  padding-right: .75rem;\n}\n.py-2 {\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n}\n.text-center {\n  text-align: center;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-sm {\n  font-size: .875rem;\n  line-height: 1.25rem;\n}\n.text-xs {\n  font-size: .75rem;\n  line-height: 1rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-light {\n  font-weight: 300;\n}\n.font-medium {\n  font-weight: 500;\n}\n.leading-snug {\n  line-height: 1.375;\n}\n.text-gray-800 {\n  --tw-text-opacity:1;\n  color: rgb(31 41 55/var(--tw-text-opacity,1));\n}\n.text-red-500 {\n  --tw-text-opacity:1;\n  color: rgb(239 68 68/var(--tw-text-opacity,1));\n}\n.text-zinc-100 {\n  --tw-text-opacity:1;\n  color: rgb(244 244 245/var(--tw-text-opacity,1));\n}\n.opacity-50 {\n  opacity: .5;\n}\n.shadow-md {\n  --tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);\n  --tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow,0 0 #0000),\n    var(--tw-ring-shadow,0 0 #0000),\n    var(--tw-shadow);\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n@media (min-width:640px) {\n  .sm\\:min-w-\\[20rem\\] {\n    min-width: 20rem;\n  }\n  .sm\\:p-6 {\n    padding: 1.5rem;\n  }\n  .sm\\:px-2 {\n    padding-left: .5rem;\n    padding-right: .5rem;\n  }\n  .sm\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n}\n@media (min-width:768px) {\n  .md\\:min-w-\\[24rem\\] {\n    min-width: 24rem;\n  }\n}\n');

// src/waitlist.tsx
import React, { useState } from "react";
var Waitlist = ({
  mode = "light",
  title = "Join our waitlist!",
  titleColor,
  subtitle,
  showNameField = true,
  successTitle = "You've been added to the waitlist!",
  successSubtitle = "We'll let you know when we're ready.",
  rejectDisposable = true,
  onSubmit
}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const isDark = mode === "dark";
  const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  const buttonDisabled = showNameField ? !fullName.trim() || !isValidEmail(email) : !isValidEmail(email);
  const handleSubmit = async () => {
    setFormSubmitted(true);
    setError("");
    if (!isValidEmail(email)) {
      return;
    }
    setLoading(true);
    try {
      if (rejectDisposable) {
        const response2 = await fetch(
          `https://open.kickbox.com/v1/disposable/${email}`
        );
        const data = await response2.json();
        if (data.disposable) {
          setError("Disposable email addresses are not allowed.");
          return;
        }
      }
      const response = await onSubmit({
        email,
        fullName: showNameField ? fullName : void 0
      });
      setSuccess(true);
    } catch (err) {
      if (err instanceof Error)
        setError(err.message);
      else
        setError("Could not add your email to the waitlist. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  if (success) {
    return /* @__PURE__ */ React.createElement("div", { className: "p-4 sm:p-6 rounded-md shadow-md max-w-md min-w-0 sm:min-w-[20rem] md:min-w-[24rem] mx-auto w-full" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center text-center" }, /* @__PURE__ */ React.createElement(
      "svg",
      {
        className: "h-20 w-20 mb-4",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1,
        viewBox: "0 0 24 24"
      },
      /* @__PURE__ */ React.createElement("path", { d: "M5.8 11.3 2 22l10.7-3.79" }),
      /* @__PURE__ */ React.createElement("path", { d: "M4 3h.01" }),
      /* @__PURE__ */ React.createElement("path", { d: "M22 8h.01" }),
      /* @__PURE__ */ React.createElement("path", { d: "M15 2h.01" }),
      /* @__PURE__ */ React.createElement("path", { d: "M22 20h.01" }),
      /* @__PURE__ */ React.createElement("path", { d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" }),
      /* @__PURE__ */ React.createElement("path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" }),
      /* @__PURE__ */ React.createElement("path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" }),
      /* @__PURE__ */ React.createElement("path", { d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" })
    ), /* @__PURE__ */ React.createElement(
      "h2",
      {
        className: "text-3xl sm:text-4xl font-bold mb-2",
        style: titleColor && titleColor.includes("gradient") ? {
          backgroundImage: titleColor,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        } : titleColor ? { color: titleColor } : {}
      },
      successTitle
    ), /* @__PURE__ */ React.createElement("p", { className: "text-sm" }, successSubtitle)));
  }
  return /* @__PURE__ */ React.createElement(
    "form",
    {
      className: "p-4 sm:p-6 max-w-md min-w-0 sm:min-w-[20rem] md:min-w-[24rem] mx-auto w-full",
      onSubmit: (e) => {
        e.preventDefault();
        if (!buttonDisabled) {
          handleSubmit();
        }
      }
    },
    /* @__PURE__ */ React.createElement(
      "h2",
      {
        className: "text-center text-3xl sm:text-4xl font-medium mb-2",
        style: titleColor && titleColor.includes("gradient") ? {
          backgroundImage: titleColor,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        } : titleColor ? { color: titleColor } : {}
      },
      title
    ),
    subtitle && /* @__PURE__ */ React.createElement("p", { className: "text-center mb-6 leading-snug" }, subtitle),
    showNameField && /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex items-center rounded-md border px-1 sm:px-2
              ${isDark ? "border-zinc-700 bg-zinc-800" : "border-gray-300 bg-white"}
            `
      },
      /* @__PURE__ */ React.createElement(
        "svg",
        {
          className: "h-5 w-5 mr-2",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ React.createElement("circle", { cx: "12", cy: "7", r: "4" })
      ),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "text",
          placeholder: "Full name...",
          className: `w-full py-2 text-sm focus:outline-none
                ${isDark ? "bg-zinc-800 text-zinc-100" : "bg-white text-gray-800"}
              `,
          value: fullName,
          onChange: (e) => setFullName(e.target.value)
        }
      )
    )),
    /* @__PURE__ */ React.createElement("div", { className: "mb-4" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: `flex items-center rounded-md border px-1 sm:px-2
            ${isDark ? "border-zinc-700 bg-zinc-800" : "border-gray-300 bg-white"}
          `
      },
      /* @__PURE__ */ React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5 mr-2",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        /* @__PURE__ */ React.createElement("rect", { width: "20", height: "16", x: "2", y: "4", rx: "2" }),
        /* @__PURE__ */ React.createElement("path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" })
      ),
      /* @__PURE__ */ React.createElement(
        "input",
        {
          type: "email",
          placeholder: "Email address..",
          className: `w-full py-2 text-sm focus:outline-none
              ${isDark ? "bg-zinc-800 text-zinc-100" : "bg-white text-gray-800"}
            `,
          value: email,
          onChange: (e) => {
            setEmail(e.target.value);
            if (error)
              setError("");
          }
        }
      )
    ), formSubmitted && !isValidEmail(email) && email.trim().length > 0 && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-xs mt-1" }, "Please enter a valid email address.")),
    error && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-sm mb-2" }, error),
    /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        disabled: buttonDisabled || loading,
        className: `w-full py-2 px-3 sm:px-4 flex items-center justify-center rounded-md font-light text-sm mt-2 ${isDark ? "bg-zinc-800" : "bg-zinc-100"}
          ${buttonDisabled || loading ? "opacity-50 cursor-not-allowed" : ""}
        `
      },
      loading ? /* @__PURE__ */ React.createElement(React.Fragment, null, "Please wait...", /* @__PURE__ */ React.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          className: "animate-spin h-5 w-5 ml-2"
        },
        /* @__PURE__ */ React.createElement("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
      )) : /* @__PURE__ */ React.createElement(React.Fragment, null, "Join the waitlist", /* @__PURE__ */ React.createElement(
        "svg",
        {
          className: "h-5 w-5 ml-2",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2,
          viewBox: "0 0 24 24"
        },
        /* @__PURE__ */ React.createElement(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M13 7l5 5m0 0-5 5m5-5H6"
          }
        )
      ))
    )
  );
};
var waitlist_default = Waitlist;
export {
  waitlist_default as Waitlist
};
//# sourceMappingURL=index.mjs.map