import { useEffect, useState } from "react";

const useDebounce = (value, delay = 500) => {
  const [debounced, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounced;
};

export default useDebounce;
