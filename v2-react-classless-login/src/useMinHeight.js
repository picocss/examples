import { useEffect } from "react";

const useMinHeight = () => {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const main = document.getElementsByTagName("main")[0];
    if (!main) {
      return;
    }
    const resizeListener = () => {
      main.style.minHeight = window.innerHeight + "px";
    };
    main.style.minHeight = window.innerHeight + "px";
    window.addEventListener("resize", resizeListener);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);
};

export default useMinHeight;
