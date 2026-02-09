//React
import { useState, useEffect } from "react";
//Libs externas
import { House, History, Settings, Sun, Moon } from "lucide-react";
//Componentes
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
//Styles
import styles from "./Menu.module.css";
import { RouterLink } from "../RouterLink/RouterLink";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    return (localStorage.getItem("theme") as AvailableThemes) ?? "dark";
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />,
  };

  function handleThemeChange() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuButton}
        href={"/"}
        aria-label="Página inicial"
        title="Página inicial"
      >
        {<House />}
      </RouterLink>

      <RouterLink
        className={styles.menuButton}
        href={"/history"}
        aria-label="Histórico de tarefas"
        title="Histórico de tarefas"
      >
        {<History />}
      </RouterLink>

      <RouterLink
        className={styles.menuButton}
        href={"/settings"}
        aria-label="Configurações do pomodoro"
        title="Configurações do pomodoro"
      >
        {<Settings />}
      </RouterLink>

      <ThemeToggle
        onClick={handleThemeChange}
        icon={nextThemeIcon[theme]}
        aria-label="Alternar o tema para claro"
        title={
          theme === "dark"
            ? "Alterar tema para claro"
            : "Alterar tema para escuro"
        }
      />
    </nav>
  );
}
