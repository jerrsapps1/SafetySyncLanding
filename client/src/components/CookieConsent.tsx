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

  const onSave = async (e?: React.FormEvent) => {
    e?.preventDefault();
    // Log consent decision to backend
    await postConsent('save', consent, window.location.pathname);
    setOpen(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      {/* Backdrop when modal open via footer link */}
      {open && (
        <div className="fixed inset-0 bg-black/40" onClick={() => setOpen(false)} />
      )}

      {/* Banner / Modal container */}
      <div className={`mx-auto max-w-2xl rounded-t-2xl md:rounded-2xl shadow-xl border border-white/20 bg-gray-900 m-4 ${open ? 'md:fixed md:inset-0 md:max-w-xl md:m-auto' : ''}`}>
        <div className="p-5">
          <h2 className="text-lg font-semibold text-white">Cookies & Privacy</h2>
          <p className="mt-1 text-sm text-gray-300">
            We use cookies to make SafetySync.ai work and to improve your experience. You can control optional categories.
          </p>

          {/* Preferences */}
          <form onSubmit={onSave} className="mt-4 space-y-3">
            <div className="flex items-start gap-3">
              <input type="checkbox" checked readOnly className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800" />
              <div>
                <div className="font-medium text-white">Essential</div>
                <div className="text-sm text-gray-400">Required for basic site functionality. Always on.</div>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800"
                checked={consent.analytics}
                onChange={(e) => setConsent({ analytics: e.target.checked })}
              />
              <div>
                <div className="font-medium text-white">Analytics</div>
                <div className="text-sm text-gray-400">Helps us understand usage to improve the product.</div>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800"
                checked={consent.marketing}
                onChange={(e) => setConsent({ marketing: e.target.checked })}
              />
              <div>
                <div className="font-medium text-white">Marketing</div>
                <div className="text-sm text-gray-400">Used to personalize offers and measure campaigns.</div>
              </div>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-800"
                checked={consent.preferences}
                onChange={(e) => setConsent({ preferences: e.target.checked })}
              />
              <div>
                <div className="font-medium text-white">Preferences</div>
                <div className="text-sm text-gray-400">Remembers your settings, like language or region.</div>
              </div>
            </label>

            <div className="mt-4 flex flex-col-reverse sm:flex-row gap-3">
              <button 
                type="button" 
                onClick={async () => {
                  rejectAll();
                  await postConsent('reject_all', { essential: true, analytics: false, marketing: false, preferences: false }, window.location.pathname);
                  setOpen(false);
                }} 
                className="px-4 py-2 rounded-lg border border-gray-600 text-white text-sm hover:bg-gray-800 transition-colors"
                data-testid="button-reject-nonessential"
              >
                Reject non‑essential
              </button>
              <button 
                type="submit" 
                className="px-4 py-2 rounded-lg bg-gray-700 text-white text-sm hover:bg-gray-600 transition-colors"
                data-testid="button-save-choices"
              >
                Save choices
              </button>
              <button 
                type="button" 
                onClick={async () => {
                  acceptAll();
                  await postConsent('accept_all', { essential: true, analytics: true, marketing: true, preferences: true }, window.location.pathname);
                  setOpen(false);
                }} 
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm transition-all duration-300"
                data-testid="button-accept-all"
              >
                Accept all
              </button>
            </div>

            <div className="mt-3 text-xs text-gray-500">
              Read our <a className="underline text-blue-400 hover:text-blue-300" href="/privacy-policy">Privacy Policy</a> and <a className="underline text-blue-400 hover:text-blue-300" href="/terms-of-service">Terms</a>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}