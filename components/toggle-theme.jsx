"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from 'lucide-react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <button
      className={`z-[10000] absolute right-5 top-24 md:top-2 p-1 md:p-3 rounded-xl duration-200 border shadow-md border-bg-zinc-400 dark:bg-zinc-700`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? <MoonStar className="size-5 " /> : <Sun className="size-5 " />}
    </button>
  );
};