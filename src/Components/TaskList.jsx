import TasksCards from "./TasksCard";
import { useEffect, useState } from "react";

export default function TaskList(props) {
  const { list } = props;
  const [selected, setSelected] = useState([]);

  const handleCheckTask = (taskName) => {
    console.log("Taskclicked from", taskName);

    let newSelected = [...selected];

    if (!selected.includes(taskName)) {
      newSelected = [...selected, taskName];
    } else {
      newSelected = newSelected.filter((task) => taskName != task);
    }

    setSelected(newSelected);

    localStorage.setItem("selected", JSON.stringify(newSelected));
  };

  useEffect(() => {
    const localStorageData = localStorage.getItem("selected");
    const storedSelected = JSON.parse(localStorageData);
    setSelected(storedSelected);
  }, []);

  console.log({ selected });

  return (
    <div>
      <input
        type="text"
        placeholder="Escriba una nueva tarea"
        className="inputNew"
      />
      <button>Add</button>
      <ul>
        {list.map((task) => (
          <TasksCards
            key={task.name}
            id={task.id}
            name={task.name}
            completed={task.completed}
            onCheckTaskClick={handleCheckTask}
          />
        ))}
      </ul>
    </div>
  );
}
