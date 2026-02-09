import { useSortTableData } from "../../hooks/useSortableData";
import { getTaskStatus } from "../../utils/getTaskStatus";
import { formatDate } from "../../utils/formateDate";
//Styles
import styles from "./HistoryTable.module.css";
import type { TaskModel } from "../../models/TaskModel";

type HistoryTableProps = {
  tasks: TaskModel[];
  activeTask: TaskModel | null;
};

const taskTypeDictionary = {
  workTime: "Foco",
  shortBreakTime: "Descanso curto",
  longBreakTime: "Descanso longo",
};

export function HistoryTable({ tasks, activeTask }: HistoryTableProps) {
  const {
    sortedData: sortedTasks,
    requestSort,
    getSortIcon,
  } = useSortTableData(tasks, {
    key: "startDate",
    direction: "desc",
  });

  return (
    <div className={styles.responsiveTable}>
      <table>
        <thead>
          <tr>
            <th onClick={() => requestSort("name")}>
              Tarefa <span>{getSortIcon("name")}</span>
            </th>
            <th onClick={() => requestSort("duration")}>
              Duração <span>{getSortIcon("duration")}</span>
            </th>
            <th onClick={() => requestSort("startDate")}>
              Data <span>{getSortIcon("startDate")}</span>
            </th>
            <th>Status</th>
            <th onClick={() => requestSort("type")}>
              Tipo <span>{getSortIcon("type")}</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedTasks.map((task) => {
            return (
              <tr key={task.id}>
                <td>{task.name}</td>
                <td>{task.duration}</td>
                <td>{formatDate(task.startDate)}</td>
                <td>{getTaskStatus(task, activeTask)}</td>
                <td>{taskTypeDictionary[task.type]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
