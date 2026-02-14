import { useEffect, useState } from "react";

type Breakpoint = "mobile" | "tablet" | "desktop";

const getBreakpoint = (): Breakpoint => {

    if (typeof window === "undefined") {
        return "desktop";
    }

    const width = window.innerWidth;
    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    return "desktop";
};

export const useBreakpoint = (): Breakpoint => {

    const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onResize = () => setBreakpoint(getBreakpoint());

        window.addEventListener("resize", onResize);
        
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return breakpoint;
};
