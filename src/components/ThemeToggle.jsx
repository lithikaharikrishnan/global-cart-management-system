
import { Moon, Sun } from "lucide-react";
import useTheme from "../context/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="icon-button theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === "light" ? "Dark mode" : "Light mode"}
    >
      {theme === "light" ? (
        <Moon size={20} />
      ) : (
        <Sun size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;
