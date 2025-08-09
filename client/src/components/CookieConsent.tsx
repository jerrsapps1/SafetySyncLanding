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
        <div className="fixed inset-0 bg-black/80" onClick={() => setOpen(false)} />
      )}

      {/* Banner / Modal container */}
      <div className={`mx-auto max-w-xl rounded-t-2xl md:rounded-2xl shadow-2xl border border-white/20 bg-gray-900/95 backdrop-blur-xl m-4 ${open ? 'md:fixed md:inset-0 md:max-w-lg md:m-auto md:translate-x-[-50%] md:translate-y-[-50%] md:left-[50%] md:top-[50%]' : ''}`}>
        <div className="p-5">
          <h2 className="text-lg font-semibold text-white mb-1">Cookies & Privacy</h2>
          <p className="text-sm text-gray-300 mb-4">
            We use cookies to make SafetySync.ai work and to improve your experience. You can control optional categories.
          </p>

          {/* Preferences */}
          <form onSubmit={onSave} className="space-y-3">
            <div className="flex items-center gap-3 p-2.5 rounded-md bg-gray-800/40 border border-white/10">
              <input 
                type="checkbox" 
                checked 
                readOnly 
                className="h-3.5 w-3.5 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-offset-0" 
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm">Essential</div>
                <div className="text-xs text-gray-400">Required for basic site functionality. Always on.</div>
              </div>
            </div>

            <label className="flex items-center gap-3 cursor-pointer p-2.5 rounded-md bg-gray-800/40 border border-white/10 hover:bg-gray-800/60 transition-colors">
              <input 
                type="checkbox" 
                className="h-3.5 w-3.5 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-offset-0" 
                checked={consent.analytics} 
                onChange={(e) => setConsent({ analytics: e.target.checked })} 
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm">Analytics</div>
                <div className="text-xs text-gray-400">Helps us understand usage to improve the product.</div>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer p-2.5 rounded-md bg-gray-800/40 border border-white/10 hover:bg-gray-800/60 transition-colors">
              <input 
                type="checkbox" 
                className="h-3.5 w-3.5 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-offset-0" 
                checked={consent.marketing} 
                onChange={(e) => setConsent({ marketing: e.target.checked })} 
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm">Marketing</div>
                <div className="text-xs text-gray-400">Used to personalize offers and measure campaigns.</div>
              </div>
            </label>

            <label className="flex items-center gap-3 cursor-pointer p-2.5 rounded-md bg-gray-800/40 border border-white/10 hover:bg-gray-800/60 transition-colors">
              <input 
                type="checkbox" 
                className="h-3.5 w-3.5 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-offset-0" 
                checked={consent.preferences} 
                onChange={(e) => setConsent({ preferences: e.target.checked })} 
              />
              <div className="flex-1 min-w-0">
                <div className="font-medium text-white text-sm">Preferences</div>
                <div className="text-xs text-gray-400">Remembers your settings, like language or region.</div>
              </div>
            </label>

            <div className="mt-5 flex flex-col-reverse sm:flex-row gap-2">
              <button 
                type="button" 
                onClick={onRejectAll} 
                className="px-3 py-1.5 rounded-md border border-white/20 text-gray-300 text-xs hover:bg-gray-800/50 transition-colors"
                data-testid="button-reject-all"
              >
                Reject non‑essential
              </button>
              <button 
                type="submit" 
                className="px-3 py-1.5 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-xs transition-colors"
                data-testid="button-save-choices"
              >
                Save choices
              </button>
              <button 
                type="button" 
                onClick={onAcceptAll} 
                className="px-3 py-1.5 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs transition-all duration-300"
                data-testid="button-accept-all"
              >
                Accept all
              </button>
            </div>

            <div className="mt-3 text-xs text-gray-400 text-center">
              Read our{' '}
              <a className="underline hover:text-white transition-colors" href="/privacy-policy" data-testid="link-privacy-policy">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a className="underline hover:text-white transition-colors" href="/terms-of-service" data-testid="link-terms-of-service">
                Terms
              </a>.
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}