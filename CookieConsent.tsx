import React, { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
      <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 z-50 shadow-lg motion-safe:animate-slide-up motion-reduce:animate-none">

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm leading-snug">
          We use cookies to improve your experience, analyze site traffic, and
          personalize content. By using SafetySync.ai, you agree to our{" "}
          <a
            href="/privacy"
            className="underline hover:text-blue-300 transition"
          >
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={acceptCookies}
          className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
