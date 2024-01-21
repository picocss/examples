import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

export default function ColorSchemeSwitcher(props) {
  const { switchTheme, theme } = useTheme();
  const nextTheme = theme === "dark" ? "light" : "dark";
  const nextThemeLabel = theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode";

  const handleSwitchTheme = (event) => {
    event.preventDefault();
    switchTheme();
  };

  return (
    <a href={`#${nextTheme}`} aria-label={nextThemeLabel} onClick={handleSwitchTheme} {...props}>
      {theme === "dark" ? <IconSun /> : <IconMoon />}
    </a>
  );
}
