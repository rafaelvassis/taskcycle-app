//Componentes
import { RouterLink } from "../RouterLink/RouterLink";
//Styles
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink className={styles.aboutLink} href="/about">
        Entenda a técnica pomodoro 🍅
      </RouterLink>
      <RouterLink className={styles.copyright} href="/">
        TaskCycle &copy; {new Date().getFullYear()} - Feito com 💙
      </RouterLink>
    </footer>
  );
}
