import { useEffect, useRef } from "react";

export default function useOutsideClick(onClose) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose?.();
      }
    };

    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [onClose, ref]);

  return ref;
}
