import "./App.css";
import Header from "./Components/Header";
import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import Footer from "./Components/Footer";
import { useToDo } from "./hooks/useToDo";

function App() {
  const {
    list,
    pendingToDo,
    addTask,
    onDeleteItem,
    onEditTask,
    onCompleted,
    onDeleteList,
  } = useToDo();

  return (
    <div className="mainBox">
      <Header />
      <TaskForm addTask={addTask} />
      <TaskList
        list={list}
        onCompleted={onCompleted}
        onDeleteItem={onDeleteItem}
        onEditTask={onEditTask}
      />
      <Footer onDeleteList={onDeleteList} pendingToDo={pendingToDo} />
    </div>
  );
}

export default App;
