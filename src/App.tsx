//Componentes
import { MessagesContainer } from "./components/MessagesContainer/MessagesContainer.tsx";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider.tsx";
import { MainRouter } from "./routers/Router.tsx";

//Styles
import "./styles/theme.css";

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter/>
      </MessagesContainer>
    </TaskContextProvider>
  );
}
