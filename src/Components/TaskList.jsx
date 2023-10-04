import TasksCards from "./TasksCard";

export default function TaskList(props) {
  const { list, onCompleted, onDeleteItem, onEditTask } = props;

  return (
    <div>
      <ul>
        {list.map((task) => (
          <TasksCards
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            completed={task.completed}
            onCompleted={onCompleted}
            onDeleteItem={onDeleteItem}
            onEditTask={onEditTask}
          />
        ))}
      </ul>
    </div>
  );
}
