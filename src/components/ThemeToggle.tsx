"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "blue";
const THEMES: { id: Theme; icon: string; label: string }[] = [
  { id: "dark", icon: "🌙", label: "다크" },
  { id: "light", icon: "☀️", label: "라이트" },
  { id: "blue", icon: "💙", label: "블루" },
];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("rl_theme") as Theme) || "dark";
    setTheme(saved);
    document.documentElement.dataset.theme = saved;
  }, []);

  function apply(t: Theme) {
    setTheme(t);
    document.documentElement.dataset.theme = t;
    localStorage.setItem("rl_theme", t);
  }

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1">
      {THEMES.map((t) => (
        <button
          key={t.id}
          onClick={() => apply(t.id)}
          aria-label={t.label}
          title={t.label}
          className={
            "grid h-8 w-8 place-items-center rounded-full text-sm transition " +
            (theme === t.id
              ? "bg-gradient-to-br from-[#2dd4a7] to-[#38bdf8] shadow"
              : "hover:bg-black/10 dark:hover:bg-white/10")
          }
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
}
