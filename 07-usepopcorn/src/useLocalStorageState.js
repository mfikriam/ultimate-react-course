import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(function () {
    const stroredValue = localStorage.getItem(key);
    return stroredValue ? JSON.parse(stroredValue) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
