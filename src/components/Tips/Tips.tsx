import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./Tips.module.css";

export function Tips() {
  const { state } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function renderActiveTip({
    highlight,
    text,
    time,
    actionText,
  }: {
    highlight: string;
    text: string;
    time: number;
    actionText: string;
  }) {
    return (
      <div className={styles.tips}>
        <p>
          <b>{highlight}</b> por {text} por {time}min
        </p>
        <p>{actionText}</p>
      </div>
    );
  }

  function renderInactiveTip({
    text,
    highlight,
    time,
    actionText,
  }: {
    text: string;
    highlight: string;
    time: number;
    actionText: string;
  }) {
    return (
      <div className={styles.tips}>
        <p>
          {text} <b>{highlight}</b> por {time}min
        </p>
        <p>{actionText}</p>
      </div>
    );
  }

  const activeTips = {
    workTime: renderActiveTip({
      highlight: "Foque",
      text: "",
      time: state.config.workTime,
      actionText: "(Clique no botão abaixo para interromper)",
    }),
    shortBreakTime: renderActiveTip({
      highlight: "Descanse",
      text: "",
      time: state.config.shortBreakTime,
      actionText: "(Clique no botão abaixo para interromper)",
    }),
    longBreakTime: renderActiveTip({
      highlight: "Descanse",
      text: "",
      time: state.config.longBreakTime,
      actionText: "(Clique no botão abaixo para interromper)",
    }),
  };

  const inactiveTips = {
    workTime: renderInactiveTip({
      text: "A seguir: ",
      highlight: "Foco",
      time: state.config.workTime,
      actionText: "(Clique no botão abaixo para iniciar)",
    }),
    shortBreakTime: renderInactiveTip({
      text: "A seguir: ",
      highlight: "Descanso curto",
      time: state.config.shortBreakTime,
      actionText: "(Clique no botão abaixo para iniciar)",
    }),
    longBreakTime: renderInactiveTip({
      text: "A seguir: ",
      highlight: "Descanso longo",
      time: state.config.longBreakTime,
      actionText: "(Clique no botão abaixo para iniciar)",
    }),
  };

  return (
    <>
      {!!state.activeTask && activeTips[state.activeTask.type]}
      {!state.activeTask && inactiveTips[nextCycleType]}
    </>
  );
}
