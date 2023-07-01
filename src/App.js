import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

export default function App() {
  const [isDark, setisDark] = useState(false);

  function themeHandler() {
    const updatedTheme = !isDark;
    setisDark(updatedTheme);
    localStorage.setItem(
      "userThemePreference",
      updatedTheme ? "dark" : "light"
    );
  }

  useEffect(() => {
    const themePreference = localStorage.getItem("userThemePreference");
    if (themePreference === "dark") {
      setisDark(true);
    }
  }, []);

  let className = isDark ? "theme-dark" : "theme-white";
  return (
    <div className={"site-wrapper " + className}>
      <Header themeHandler={themeHandler} isDark={isDark} />
      <Section />
      <Footer />
    </div>
  );
}
