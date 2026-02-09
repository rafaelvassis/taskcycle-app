//Componentes
import { Logo } from "../Logo/Logo";
import { Menu } from "../Menu/Menu";
//Styles
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
}
