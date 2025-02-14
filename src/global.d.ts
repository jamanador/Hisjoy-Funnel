export { }; // Ensures this file is treated as a module

declare global {
  interface Window {
    jotformEmbedHandler: (iframeSelector: string, domain: string) => void;
  }
}
