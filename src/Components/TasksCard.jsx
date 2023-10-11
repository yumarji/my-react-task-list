import { BiEdit, BiTrash, BiSave } from "react-icons/bi";
import { FcCancel } from "react-icons/fc";
import { useState } from "react";
import "../App.css";
import { Box, Checkbox, Flex, Stack } from "@chakra-ui/react";

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
      newStyle = "boxTaskCompleted";
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

    const handleCancelClick = (e) => {
      e.preventDefault();
    };

    return (
      <Box padding="0.3rem 0rem">
        <Flex direction={"row"} alignItems={"center"} justifyContent="center">
          <div className={getstyle()}>
            <div className="form-edit">
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
            </div>
            <span>
              <button className="btn-task">
                <BiSave className="btn-save" onClick={handleSaveClick}></BiSave>
              </button>
              <button className="btn-task">
                <FcCancel
                  className="btn-save"
                  onClick={() => setEditing(false)}
                ></FcCancel>
              </button>
            </span>
          </div>
        </Flex>
      </Box>
    );
  }

  //Modo visualización
  function EditionOff() {
    return (
      <Box padding="0.3rem 0rem">
        <Flex direction={"row"} alignItems={"center"} justifyContent="center">
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
        </Flex>
      </Box>
    );
  }

  return <div>{editing ? <EditionOn /> : <EditionOff />}</div>;
}
