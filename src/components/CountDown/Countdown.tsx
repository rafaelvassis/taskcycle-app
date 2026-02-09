//Styles
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import styles from "./CountDown.module.css";

export function Countdown() {
  const { state } = useTaskContext();
  return (
    <div className={styles.countdown}>{state.formattedSecondsRemaining}</div>
  );
}
