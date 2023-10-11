import React from "react";

export default function SobreNosotros() {
  return (
    <div>
      <h2 className="titleSobreNosotros">Sobre Nosotros</h2>
      <p className="textSobreNosotros">
        Esta aplicación de lista de tareas fue desarrollada por Yulibery
        Martínez, estudiante de ADA School-Protalento.
      </p>

      <p className="textSobreNosotros">
        La aplicación te permitirá gestionar tu tiempo ingresando las tareas a
        realizar, podrás actualizarlas, cambiar su estado a completado,
        borrarlas y también editarlas, en caso de que desees hacer algún cambio
        en el nombre de la tarea o descripción. Así mismo, tendrás el control de
        las tareas pendientes para que las puedas administrar correctamente.
      </p>

      <p className="textSobreNosotros">
        Las tecnologías utilizadas para realizar esta aplicación fueron:
      </p>
      <ul>
        <li className="boxTecnologias">
          <img className="logosTecnologias" src="../imagenes/Html.png"></img>
          HTML
        </li>
        <li className="boxTecnologias">
          <img className="logosTecnologias" src="../imagenes/CSS.png"></img>
          CSS
        </li>
        <li className="boxTecnologias">
          <img className="logosTecnologias" src="../imagenes/JS.png"></img>
          Java Script
        </li>
        <li className="boxTecnologias">
          <img className="logosTecnologias" src="../imagenes/React.png"></img>
          React JS
        </li>
      </ul>
    </div>
  );
}
