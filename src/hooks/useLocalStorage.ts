import { useEffect, useState } from "react";

const useLocalStorage: (
  key: string,
  defaultValue: string
) => (string | React.Dispatch<React.SetStateAction<string>>)[] = (
  key,
  defaultValue
) => {
  const [value, setValue] = useState<string>(() => {
    // retrieve value from localStorage
    const saved = JSON.parse(localStorage.getItem(key) || "");
    return saved || defaultValue;
  });

  useEffect(() => {
    // store the value in localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
