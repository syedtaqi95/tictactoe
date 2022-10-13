import { useEffect, useState } from "react";

const useLocalStorage: (
  key: string,
  defaultValue: any
) => (any | React.Dispatch<React.SetStateAction<any>>)[] = (
  key,
  defaultValue
) => {
  const [value, setValue] = useState<any>(() => {
    // retrieve value from localStorage
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "");
      return saved;
    } catch (e) {
      return defaultValue;
    }
  });

  useEffect(() => {
    // store the value in localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
