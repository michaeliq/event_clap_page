import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

export const useBreakpoint = (): Breakpoint => {

  const getBreakpoint = (): Breakpoint => {
    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
  };

  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

  useEffect(() => {
    const onResize = () => setBreakpoint(getBreakpoint());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return breakpoint;
};
