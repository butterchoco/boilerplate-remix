import { useEffect } from "react";

const UseFocus = (fn: () => void) => {
  useEffect(() => {
    const revalidate = () => {
      if (document.visibilityState === "visible") {
        fn();
      }
    };
    document.addEventListener("visibilitychange", revalidate);

    return () => document.removeEventListener("visibilitychange", revalidate);
  }, [fn]);

  return null;
};

export default UseFocus;
