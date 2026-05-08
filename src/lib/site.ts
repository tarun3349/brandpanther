/** Canonical production origin (no trailing slash). Set `VITE_SITE_URL` at build time when your domain differs. */
export const SITE_URL = String(import.meta.env.VITE_SITE_URL ?? "https://brandpanther.ai").replace(/\/+$/, "");
