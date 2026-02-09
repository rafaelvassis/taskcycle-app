//Componentes
import { useEffect, useRef } from "react";
import { Countdown } from "../../components/CountDown/Countdown";
import { Form } from "../../components/Form/Form";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { Cycles } from "../../components/Cycles/Cycles";
import { Tips } from "../../components/Tips/Tips";
//Models
import type { TaskModel } from "../../models/TaskModel";
//Utils
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
//Styles
import styles from "./Home.module.css";
//Contexts
import { TaskActionTypes } from "../../contexts/TaskContext/taskAction";
import { showMessage } from "../../adapters/showMessage";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";

export function Home() {
  const { state, dispatch } = useTaskContext();

  const taskNameInput = useRef<HTMLInputElement>(null);
  const lastTaskName = state.tasks[state.tasks.length - 1]?.name || "";

  // Ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  useEffect(() => {
    document.title = "TaskCycle";
  }, []);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    const taskName = taskNameInput.current?.value.trim();

    if (!taskName) {
      showMessage.warn("Digite o nome da tarefa");

      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

    showMessage.success("Tarefa iniciada");
  }

  function handleInterruptTask() {
    showMessage.dismiss();
    showMessage.confirm(
      "Tem certeza que deseja interromper essa task?",
      (confirmation) => {
        if (!confirmation) return;
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
        showMessage.warning("Tarefa interrompida");
      },
    );
  }

  return (
    <MainTemplate>
      <main className={styles.mainHome}>
        <Countdown />

        <Form onSubmit={handleCreateNewTask}>
          <div className={styles.formRow}>
            <DefaultInput
              id="nomeTask"
              name="taskName"
              type="text"
              labelText="Tarefa:"
              ref={taskNameInput}
              disabled={!!state.activeTask}
              defaultValue={lastTaskName}
            />
          </div>

          {state.currentCycle > 0 && <Cycles />}

          <Tips />

          {!state.activeTask ? (
            <DefaultButton
              key="typeSubmit"
              icon={<PlayCircleIcon />}
              color={"blue"}
              type="submit"
              aria-label={"Iniciar Tarefa"}
              title={"Iniciar Tarefa"}
            />
          ) : (
            <DefaultButton
              key="typeInterrupt"
              icon={<StopCircleIcon />}
              color={"red"}
              type="button"
              aria-label={"Interromper tarefa atual"}
              title={"Interromper tarefa atual"}
              onClick={handleInterruptTask}
            />
          )}
        </Form>
      </main>
    </MainTemplate>
  );
}
