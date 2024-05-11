import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { MoonIcon } from "@/components/icons/moo-icon";
import { SunIcon } from "@/components/icons/sun-icons";
export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-center items-center">
       <label
        className="flex justify-center items-center relative cursor-pointer select-none"
        htmlFor="toggleSwitch"
      >
        <input
          type="checkbox"
          id="toggleSwitch"
          className="absolute opacity-0 cursor-pointer h-0 w-0"
          onChange={handleToggle}
        />
        <span className="absolute hidden sun animate-keyframes-fill">
          <MoonIcon />
        </span>
        <span className="absolute  moon animate-keyframes-fill">
          <SunIcon />
        </span>
      </label>
    </div>
  );
}
