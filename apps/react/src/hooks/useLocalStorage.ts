import { useEffect, useState } from 'react';

type SetValue<T> = T | ((prev: T) => T);

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);

      if (item === null) {
        return initialValue;
      }

      return JSON.parse(item) as T;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error(`There are some errors while working with localStorage:${key}`);
    }
  }, [key, value]);

  const setStoredValue = (newValue: SetValue<T>) => {
    setValue((prev) => (newValue instanceof Function ? newValue(prev) : newValue));
  };

  const remove = () => {
    try {
      localStorage.removeItem(key);
    } finally {
      setValue(initialValue);
    }
  };

  return [value, setStoredValue, remove] as const;
};
