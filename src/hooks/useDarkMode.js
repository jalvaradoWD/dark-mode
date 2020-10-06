import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [storedValue, setStoredValue] = useLocalStorage(
    "darkMode",
    initialValue
  );

  const setValue = () => {
    setStoredValue(!storedValue);
  };

  return [storedValue, setValue];
};
