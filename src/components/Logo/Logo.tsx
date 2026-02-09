//Libs Externas
import { RefreshCcwDot } from "lucide-react";
//components
import { RouterLink } from "../RouterLink/RouterLink";
//Styles
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <RouterLink className={styles.logo__link} href="/">
        <RefreshCcwDot />
        <span className={styles.logo__text}>TaskCycle</span>
      </RouterLink>
    </div>
  );
}
