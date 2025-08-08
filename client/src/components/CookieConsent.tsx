// src/components/CookieConsent.tsx
import React, { useState } from 'react';
import { useConsent } from '@/hooks/useConsent';
import { on } from '@/lib/events';
import { postConsent } from '@/lib/consent-api';

export default function CookieConsent() {
  const { consent, isSet, acceptAll, rejectAll, setConsent } = useConsent();
  const [open, setOpen] = useState(false);

  // Listen for event to open cookie settings from footer
  React.useEffect(() => {
    return on('open-cookie-settings', () => setOpen(true));
  }, []);

  if (isSet && !open) return null; // hide banner after decision unless settings modal opened

  const onSave = (e?: React.FormEvent) => {
    e?.preventDefault();
    postConsent('save', consent, window.location.pathname);
    setOpen(false);
  };

  const onAcceptAll = () => {
    acceptAll();
    postConsent('accept_all', { ...consent, analytics: true, marketing: true, preferences: true }, window.location.pathname);
  };

  const onRejectAll = () => {
    rejectAll();
    postConsent('reject_all', { ...consent, analytics: false, marketing: false, preferences: false }, window.location.pathname);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      {/* Backdrop when modal open via footer link */}
      {open && (
        <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
      )}

      {/* Banner / Modal container */}
      <div className={`mx-auto max-w-2xl rounded-t-2xl md:rounded-2xl shadow-xl border border-gray-200 bg-white m-4 ${open ? 'md:fixed md:inset-0 md:max-w-xl md:m-auto' : ''}`}>
        <div className="p-5">
          <h2 className="text-lg font-semibold">Cookies & Privacy</h2>
          <p className="mt-1 text-sm text-gray-600">
            We use cookies to make SafetySync.ai work and to improve your experience. You can control optional categories.
          </p>

          {/* Preferences */}
          <form onSubmit={onSave} className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" checked readOnly className="mt-1 h-4 w-4 rounded border-gray-300" />
              <div>
                <div className="font-medium">Essential</div>
                <div className="text-sm text-gray-600">Required for basic site functionality. Always on.</div>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" checked={consent.analytics} onChange={(e) => setConsent({ analytics: e.target.checked })} />
              <div>
                <div className="font-medium">Analytics</div>
                <div className="text-sm text-gray-600">Helps us understand usage to improve the product.</div>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" checked={consent.marketing} onChange={(e) => setConsent({ marketing: e.target.checked })} />
              <div>
                <div className="font-medium">Marketing</div>
                <div className="text-sm text-gray-600">Used to personalize offers and measure campaigns.</div>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" checked={consent.preferences} onChange={(e) => setConsent({ preferences: e.target.checked })} />
              <div>
                <div className="font-medium">Preferences</div>
                <div className="text-sm text-gray-600">Remembers your settings, like language or region.</div>
              </div>
            </label>

            <div className="mt-4 flex flex-col-reverse sm:flex-row gap-3">
              <button type="button" onClick={onRejectAll} className="px-4 py-2 rounded-lg border text-sm">Reject non‑essential</button>
              <button type="submit" className="px-4 py-2 rounded-lg bg-gray-900 text-white text-sm">Save choices</button>
              <button type="button" onClick={onAcceptAll} className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm">Accept all</button>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              Read our <a className="underline" href="/privacy-policy">Privacy Policy</a> and <a className="underline" href="/terms-of-service">Terms</a>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}