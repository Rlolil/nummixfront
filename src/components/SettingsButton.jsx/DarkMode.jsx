import React from "react";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const DarkMode = ({ theme, setTheme }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setTheme("light")}
        className="bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-black dark:text-white p-2 rounded-lg"
      >
        <FiSun />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="bg-zinc-200 dark:bg-zinc-700 hover:bg-zinc-300 dark:hover:bg-zinc-600 text-black dark:text-white p-2 rounded-lg"
      >
        <FaRegMoon />
      </button>
    </div>
  );
};

export default DarkMode;
