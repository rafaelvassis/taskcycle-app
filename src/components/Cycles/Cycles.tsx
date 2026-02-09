//Styles
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./Cycles.module.css";

export function Cycles() {
  const { state } = useTaskContext();

  const cycleStep = Array.from({ length: state.currentCycle });

  const cycleDescriptionMap = {
    workTime: "foco",
    shortBreakTime: "descanso curto",
    longBreakTime: "descanso longo",
  };

  function getCycleDotLabel(cycleType: string) {
    if (cycleType === "workTime") return "F";
    if (cycleType === "shortBreakTime") return "DC";
    return "DL";
  }

  return (
    <div className={styles.cycles}>
      <span>Etapas:</span>

      <div className={styles.circlesContainer}>
        {cycleStep.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={`${nextCycleType}_${nextCycle}`}
              className={`${styles.cycleDot} ${styles[nextCycleType]}`}
              aria-label={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]}`}
              title={`Indicador de ciclo de ${cycleDescriptionMap[nextCycleType]} ${nextCycleType}_${nextCycle}`}
            >{getCycleDotLabel(nextCycleType)}</span>
          );
        })}
      </div>
    </div>
  );
}
