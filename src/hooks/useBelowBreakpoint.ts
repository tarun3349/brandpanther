import { useEffect, useState } from "react";

/**
 * True when viewport width is below `px` (default 1024 = before `lg`).
 * Used to tone down scroll-linked motion on phones / small tablets.
 */
export function useBelowBreakpoint(px = 1024) {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia(`(max-width: ${1024 - 1}px)`).matches
  );

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${px - 1}px)`);
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [px]);

  return narrow;
}
