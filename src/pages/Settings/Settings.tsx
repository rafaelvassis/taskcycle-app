//Libs Externas
import { SaveIcon } from "lucide-react";
//Componentes
import { DefaultInput } from "../../components/DefaultInput/DefaultInput";
import { Form } from "../../components/Form/Form";

//styles
import styles from "./Settings.module.css";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import { useEffect, useRef } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskAction";

export function Settings() {
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const LongBreakTimeInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Configurações - TaskCycle";
  }, []);

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formErrors = [];

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(LongBreakTimeInput.current?.value);

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas número para TODOS os campos");
    }

    if (workTime < 1 || workTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para foco");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite valores entre 1 e 30 para descanso curto");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite valores entre 1 e 60 para descanso longo");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.error(error);
      });

      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });
    showMessage.success("Configurações Salvas");
  }

  return (
    <MainTemplate>
      <main className={styles.mainSettings}>
        <h1>Configurações</h1>
        <p className={styles.message}>
          Configure os minutos para as etapas do Pomodoro.
        </p>
        <Form onSubmit={handleSaveSettings}>
          <div className={styles.formRow}>
            <DefaultInput
              id="foco"
              type="number"
              labelText="Foco (min):"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
              min={1}
              max={60}
              maxLength={2}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="descansoCurto"
              type="number"
              labelText="Descanso curto (min):"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
              min={1}
              max={30}
              maxLength={2}
            />
          </div>
          <div className={styles.formRow}>
            <DefaultInput
              id="descansoLongo"
              type="number"
              labelText="Descanso longo (min):"
              ref={LongBreakTimeInput}
              defaultValue={state.config.longBreakTime}
              min={1}
              max={60}
              maxLength={2}
            />
          </div>

          <DefaultButton
            key="typeInterrupt"
            icon={<SaveIcon />}
            color={"blue"}
            type="submit"
            aria-label={"Interromper tarefa atual"}
            title={"Interromper tarefa atual"}
          />
        </Form>
      </main>
    </MainTemplate>
  );
}
