import { Task } from "./Task";

const TaskList = (props) => {
  const { list } = props;

  return (
    <div>
      {list.map((todo) => (
        <Task name={todo.thing} />
      ))}
    </div>
  );
};

export default TaskList;
