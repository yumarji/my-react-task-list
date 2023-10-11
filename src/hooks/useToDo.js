import { useEffect, useState } from "react";
import { localStorageData } from "../localStorageData";
import swal from "sweetalert";
import { v4 as uuid } from "uuid";

export function useToDo() {
  const [list, setList] = useState([]);
  const pendingToDo = list.filter((task) => !task.completed).length;
  const completedToDo = list.filter((task) => task.completed).length;

  //Función para agregar una tarea
  const addTask = (taskName, taskDescription) => {
    let newItem = {
      id: uuid(),
      name: taskName,
      description: taskDescription,
      completed: false,
    };

    swal({
      text: "Se ha agregado una nueva tarea.",
      icon: "success",
      button: "ok",
      timer: 3000,
    });

    setList([...list, newItem]);
  };

  //Función para borrar un tarea
  const onDeleteItem = (id) => {
    swal({
      title: "Eliminar una tarea",
      text: "¿Estás seguro que deseas borrar esta tarea?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((answer) => {
      if (answer) {
        swal({
          text: "La tarea seleccionada se ha borrado con éxito.",
          icon: "success",
        });
        setList(list.filter((task) => task.id !== id));
      }
    });
  };

  //Función para editar una tarea
  const onEditTask = (objEditTask) => {
    const { id, name, description } = objEditTask;

    const temp = [...list];
    const element = temp.find((item) => item.id === id);
    element.name = name;
    element.description = description;

    setList(temp);
  };

  //Función para marcar la tarea como Completada
  const onCompleted = (id) => {
    setList(
      list.map((task) => {
        return task.id === id
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };

  //Función para borrar la lista
  const onDeleteList = () => {
    swal({
      title: "Eliminar",
      text: "¿Estás seguro que deseas borrar la lista de tareas?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((answer) => {
      if (answer) {
        swal({
          text: "La lista de tareas se ha borrado con éxito.",
          icon: "success",
        });
        setList([]);
      }
    });
  };

  //Guardar los cambios guardados en Local Storage cada vez que cambie la lista de tareas
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(list));
  }, [list]);

  //Mostrar la información del Local Storage cada vez que se monte el componente
  useEffect(() => {
    setList(JSON.parse(localStorageData));
  }, []);

  return {
    list,
    pendingToDo,
    completedToDo,
    addTask,
    onDeleteItem,
    onEditTask,
    onCompleted,
    onDeleteList,
  };
}
