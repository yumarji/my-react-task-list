import "../App.css";
import Header from "../Components/Header";
import TaskList from "../Components/TaskList";
import TaskForm from "../Components/TaskForm";
import Footer from "../Components/Footer";
import { useToDo } from "../hooks/useToDo";
import { Flex } from "@chakra-ui/react";

function Tareas() {
  const {
    list,
    pendingToDo,
    completedToDo,
    addTask,
    onDeleteItem,
    onEditTask,
    onCompleted,
    onDeleteList,
  } = useToDo();

  return (
    <Flex alignItems={"center"} justifyContent={"center"}>
      <div className="mainBox">
        <Header />
        <TaskForm addTask={addTask} />
        <TaskList
          list={list}
          onCompleted={onCompleted}
          onDeleteItem={onDeleteItem}
          onEditTask={onEditTask}
        />
        <Footer
          onDeleteList={onDeleteList}
          pendingToDo={pendingToDo}
          completedToDo={completedToDo}
        />
      </div>
    </Flex>
  );
}

export default Tareas;
