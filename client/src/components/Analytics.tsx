import React from 'react';
import { useConsent } from '@/hooks/useConsent';

const GA_ID = import.meta.env.VITE_GA_ID;

export default function Analytics() {
  const { consent } = useConsent();
  if (!consent.analytics || !GA_ID) return null;
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
      <script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);} 
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { anonymize_ip: true });
      ` }} />
    </>
  );
}