// URL utilities
export function getQueryParam(key: string): string | null {
  return new URLSearchParams(window.location.search).get(key);
}