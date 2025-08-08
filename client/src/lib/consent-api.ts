// Client-side consent API utilities
import type { ConsentCategories } from '@/hooks/useConsent';

// Generate a simple session ID for tracking
function getOrCreateSessionId(): string {
  let sessionId = sessionStorage.getItem('ssai_session_id');
  if (!sessionId) {
    sessionId = 'sess_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    sessionStorage.setItem('ssai_session_id', sessionId);
  }
  return sessionId;
}

export async function postConsent(
  action: 'accept_all' | 'reject_all' | 'save',
  categories: ConsentCategories,
  page?: string
): Promise<boolean> {
  try {
    const sessionId = getOrCreateSessionId();
    
    const response = await fetch('/api/consent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action,
        categories,
        sessionId,
        page: page || window.location.pathname,
        // userId can be added later when user authentication is implemented
        userId: null,
      }),
    });

    if (!response.ok) {
      console.error('Failed to log consent:', response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error logging consent:', error);
    return false;
  }
}