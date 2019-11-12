import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage.js";

export const useDarkMode = () => {
  const [darkValue, setDarkValue] = useLocalStorage("isDark");

  const toggleDarkMode = () => {
    window.localStorage.setItem("isDark", darkValue);
    setDarkValue(!darkValue);
    console.log("Clicked 'toggleDarkMode!!!!!'");
    console.log(
      'value of "windowLocalStorage.getItem(isDark)": ',
      window.localStorage.getItem("isDark")
    );
  };

  useEffect(() => {
    const localDarkValue = JSON.parse(window.localStorage.getItem("isDark"));
    if (localDarkValue) {
      setDarkValue(localDarkValue);
    }
  }, []);

  useEffect(() => {
    if (darkValue) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkValue]);

  // darkmode should return true or false, toggleDarkMode should switch the two values

  return [darkValue, toggleDarkMode];
};
