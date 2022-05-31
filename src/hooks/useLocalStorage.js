import { useEffect, useState } from "react";

function storeDataFromLocalStorage(key, initialValue) {
  const storedValue = JSON.parse(localStorage.getItem(key));

  if (storedValue) return storedValue;

  //  <!-- when initial value is a function -->
  if (initialValue instanceof Function) {
    return initialValue();
  }

  return initialValue;
}

export const useLocalStorage = (key, initialValue) => {
  //  <!-- useState can also take function -->
  const [value, setValue] = useState(() => {
    return storeDataFromLocalStorage(key, initialValue);
  });
  //  <!-- we are using function version in useState as we don't want to call JSON.parse &&  -->
  //  <!-- localStorage ,coz it is pretty slow, so we are using function here is useState -->

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));

    return () => {};
  }, [key, value]);

  return [value, setValue];
};
