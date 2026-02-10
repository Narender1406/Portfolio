import { useEffect, useState } from "react";
import "../styles/theme-toggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <span className={`icon ${theme}`}>
        
      </span>
      <span className="label">
        
      </span>
    </button>
  );
}
