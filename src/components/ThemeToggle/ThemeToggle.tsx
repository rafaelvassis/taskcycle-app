//Styles
import styles from "./ThemeToggle.module.css";

type iconProp = {
  onClick: () => void;
  icon: React.ReactNode;
} & React.ComponentProps<"button">;

export function ThemeToggle({ onClick, icon, ...props }: iconProp) {
  return (
    <button onClick={onClick} className={styles.btnThemeToggle} {...props}>
      {icon}
    </button>
  );
}
