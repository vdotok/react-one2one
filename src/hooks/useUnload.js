import { useRef, useEffect } from "react";

const useUnload = (fn) => {
  const cb = useRef(fn); // init with fn, so that type checkers won't assume that current might be undefined

  useEffect(() => {
    cb.current = fn;
  }, [fn]);

  useEffect(() => {
    const onUnload = (...args) => cb.current?.(...args);

    window.addEventListener("beforeunload", (e)=>{
        e.preventDefault();
        e.returnValue = "";
    });
    window.addEventListener("unload", onUnload);

    return () => window.removeEventListener("beforeunload", onUnload);
  }, []);
};

export default useUnload;
