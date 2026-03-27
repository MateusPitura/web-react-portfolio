export {};

declare global {
  interface Window {
    analytics?: {
      addEvent?: (metadata: string) => void;
    };
  }
}
