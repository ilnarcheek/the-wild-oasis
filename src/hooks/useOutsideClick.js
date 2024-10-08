import { useEffect, useRef } from "react";

function useOutsideClick(handler, listeningCapture = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, listeningCapture);

      return () =>
        document.removeEventListener("click", handleClick, listeningCapture);
    },
    [handler, listeningCapture]
  );

  return ref;
}

export default useOutsideClick;
