/**
 * React Router basename for static hosts:
 * - Vite default base `/`: no basename.
 * - Vite relative base `./` (recommended for GH Pages projects): derive first URL path
 *   segment (e.g. /brand-panther/) so "/" routes match.
 */
export function resolveRouterBasename(): string | undefined {
  if (typeof window === "undefined") return undefined;

  const base = String(import.meta.env.BASE_URL ?? "/");
  const path = window.location.pathname;

  if (base.startsWith("/") && base.length > 1) {
    const core = base.replace(/^\/+|\/+$/g, "");
    return core === "" ? undefined : `/${core}`;
  }

  if (base === "/" || base === "") return undefined;

  const segments = path.split("/").filter(Boolean);
  const first = segments[0];
  if (!first || first.includes(".")) return undefined;

  return `/${first}`;
}
