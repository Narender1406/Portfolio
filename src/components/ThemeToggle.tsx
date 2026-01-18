import { useEffect, useState } from "react";
import "../styles/theme-toggle.css";

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  // Load theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.body.classList.add("light");
    }
  }, []);

  // Update theme
  useEffect(() => {
    if (isLight) {
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [isLight]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setIsLight((prev) => !prev)}
    >
      {isLight ? "🌙 Dark Mode" : "☀ Light Mode"}
    </button>
  );
}
