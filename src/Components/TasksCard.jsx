import { BiEdit, BiTrash, BiSave } from "react-icons/bi";
import { useState } from "react";
import "../App.css";

export default function TasksCard(props) {
  const {
    id,
    name,
    description,
    completed,
    onCompleted,
    onDeleteItem,
    onEditTask,
  } = props;

  const [editing, setEditing] = useState(false);

  function handleCompletedChange() {
    onCompleted(id);
  }

  const getstyle = () => {
    let newStyle = "";

    if (completed === true) {
      newStyle = "taskCompleted";
    } else {
      newStyle = "boxTask";
    }
    return newStyle;
  };

  //Modo Edición

  function EditionOn() {
    const [editTask, setEditTask] = useState(name);
    const [editDescription, setEditDescription] = useState(description);

    const handleEditTaskChange = (e) => {
      const newTextTask = e.target.value;

      setEditTask(newTextTask);
    };

    const handleEditDescriptionChange = (e2) => {
      const newTextDescription = e2.target.value;

      setEditDescription(newTextDescription);
    };

    const handleSaveClick = (e) => {
      e.preventDefault();

      onEditTask({
        id: id,
        name: editTask,
        description: editDescription,
        completed: false,
      });

      setEditing(false);
    };

    return (
      <div className={getstyle()}>
        <span className="edit">
          Task
          <input
            className="inputEdit"
            placeholder="Task"
            type="text"
            value={editTask}
            onChange={handleEditTaskChange}
          />
        </span>

        <span className="edit">
          Description
          <input
            className="inputEdit"
            type="text"
            placeholder="Description"
            value={editDescription}
            onChange={handleEditDescriptionChange}
          />
        </span>
        <span className="edit">
          <button className="btn-task">
            <BiSave className="btn-save" onClick={handleSaveClick}></BiSave>
          </button>
        </span>
      </div>
    );
  }

  //Modo visualización
  function EditionOff() {
    return (
      <div className={getstyle()}>
        <span>
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChange}
          ></input>
          {name}
          <br />
          {description}
        </span>
        <span>
          <button className="btn-task">
            <BiEdit
              className="btn-edit"
              onClick={() => setEditing(true)}
            ></BiEdit>
          </button>
          <button className="btn-task" onClick={() => onDeleteItem(id)}>
            <BiTrash className="btn-delete"></BiTrash>
          </button>
        </span>
      </div>
    );
  }

  return <div>{editing ? <EditionOn /> : <EditionOff />}</div>;
}
