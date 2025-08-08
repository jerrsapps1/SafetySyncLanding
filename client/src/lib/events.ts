export const fire = (name: string, detail?: any) => document.dispatchEvent(new CustomEvent(name, { detail }));
export const on = (name: string, cb: (e: CustomEvent) => void) => {
  const handler = cb as EventListener;
  document.addEventListener(name, handler);
  return () => document.removeEventListener(name, handler);
};