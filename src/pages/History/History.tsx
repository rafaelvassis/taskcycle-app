import { Trash2 } from "lucide-react";
import { DefaultButton } from "../../components/DefaultButton/DefaultButton";
import { MainTemplate } from "../../templates/MainTemplate/MainTemplate";
import styles from "./History.module.css";
import { HistoryTable } from "../../components/HistoryTable/HistoryTable";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { TaskActionTypes } from "../../contexts/TaskContext/taskAction";
import { showMessage } from "../../adapters/showMessage";
import { useEffect } from "react";

export function History() {
  const { state, dispatch } = useTaskContext();
  const hasTasks = Boolean(state.tasks.length);

  useEffect(() => {
    document.title = "Histórico - TaskCycle";
  }, []);

  useEffect(() => {
    return () => {
      showMessage.dismiss();
    };
  }, []);

  function handleResetHistory() {
    showMessage.dismiss();
    showMessage.confirm(
      "Apagar todo histórico?\nSerá irreversível!",
      (confirmation) => {
        if (!confirmation) return;

        dispatch({ type: TaskActionTypes.RESET_TASK });
        showMessage.warning("Histórico apagado");
      },
    );
  }

  return (
    <MainTemplate>
      <main className={styles.mainHistory}>
        <h1 className={styles.heading}>
          <span>Histórico</span>
          {hasTasks && (
            <DefaultButton
              icon={<Trash2 />}
              type="button"
              aria-label="Apagar todo o histórico"
              title="Apagar Histórico"
              onClick={handleResetHistory}
            />
          )}
        </h1>
        {hasTasks && (
          <HistoryTable tasks={state.tasks} activeTask={state.activeTask} />
        )}
        {!hasTasks && (
          <div className={styles.noHistory}>
            Nada no seu histórico 🫠🫠. <br /> Crie tasks e volte 😅✌️.
          </div>
        )}
      </main>
    </MainTemplate>
  );
}
