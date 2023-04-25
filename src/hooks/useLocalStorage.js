import { useState, useEffect } from 'react';

export const useLocalStorage = (key, value) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) ?? value;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
