// src/hooks/useConsent.ts
// Lightweight consent manager using localStorage + cookies
// Categories: essential (always on), analytics, marketing, preferences

import { useEffect, useState } from 'react';

export type ConsentCategories = {
  essential: true;       // always true
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
};

const STORAGE_KEY = 'ssai.consent.v1';

const DEFAULT_CONSENT: ConsentCategories = {
  essential: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

function setCookie(name: string, value: string, days = 180) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

export function getCookie(name: string) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

export function useConsent() {
  const [consent, setConsent] = useState<ConsentCategories>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...DEFAULT_CONSENT, ...JSON.parse(raw) } : DEFAULT_CONSENT;
    } catch {
      return DEFAULT_CONSENT;
    }
  });

  const [isSet, setIsSet] = useState<boolean>(() => !!localStorage.getItem(STORAGE_KEY));

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
      // Write a simple cookie with the consent flags for server/edge use if needed
      setCookie('ssai_consent', encodeURIComponent(JSON.stringify(consent)));
    } catch {}
  }, [consent]);

  const acceptAll = () => {
    const all: ConsentCategories = { essential: true, analytics: true, marketing: true, preferences: true };
    setConsent(all);
    setIsSet(true);
  };

  const rejectAll = () => {
    const none: ConsentCategories = { essential: true, analytics: false, marketing: false, preferences: false };
    setConsent(none);
    setIsSet(true);
  };

  const save = (next: Partial<ConsentCategories>) => {
    const merged: ConsentCategories = { ...consent, ...next, essential: true };
    setConsent(merged);
    setIsSet(true);
  };

  return { consent, isSet, setConsent: save, acceptAll, rejectAll };
}