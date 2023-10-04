import React from "react";
import { useState } from "react";

export default function TaskForm(props) {
  const { addTask } = props;

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [formValidation, setFormValidation] = useState({
    taskName: undefined,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  const onSubmitForm = () => {
    addTask(taskName, taskDescription);
    setTaskName("");
    setTaskDescription("");
    setFormValidation({
      ...formValidation,
      taskName: "Task must be at least 3 characters",
    });
  };

  const handleTaskNameChange = (e) => {
    const value = e.target.value;

    //Validation
    if (value.length < 3) {
      setFormValidation({
        ...formValidation,
        taskName: "Task must be at least 3 characters",
      });
    } else {
      setFormValidation({ ...formValidation, taskName: "" });
    }
    setTaskName(value);
  };

  const handleTaskDescriptionChange = (e) => {
    const value2 = e.target.value;

    setTaskDescription(value2);
  };

  let isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  );
  console.log("El formato es valido", isFormValid);

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <div>
          <input
            className="inputNew"
            type="text"
            placeholder="Task"
            value={taskName}
            onChange={handleTaskNameChange}
          />
          <br />
          {formValidation.taskName && (
            <span className="error" role="alert">
              {formValidation.taskName}
            </span>
          )}
        </div>

        <div className="form2">
          <input
            className="inputNew"
            type="text"
            placeholder="Description (is not required)"
            value={taskDescription}
            onChange={handleTaskDescriptionChange}
          />

          <button
            className="buttonAdd"
            disabled={!isFormValid}
            onClick={onSubmitForm}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
