import { useState, useEffect } from "react";
import DarkMode from "./DarkMode";

export default function SettingsButton() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        onClick={() => setOpen(!open)}
        className="bg-blue-500 text-white shadow-md rounded-lg p-3 flex items-center gap-2 cursor-pointer"
      >
        ⚙️ Settings
      </div>

      {open && (
        <div className="mt-2 w-44 bg-white dark:bg-zinc-800 border border-gray-300 shadow-lg rounded-lg p-3 text-gray-800 dark:text-white">
          <DarkMode theme={theme} setTheme={setTheme} />
        </div>
      )}
    </div>
  );
}
