import React, { Fragment } from "react";
import Tarea from "../tareas/Tarea";

const ListadoTarea = () => {
  const tareasProyectos = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: true },
    { nombre: "Elegir Iterar", estado: false },
  ];

  return (
    <Fragment>
      <h2>Proyecto: Tienda Virtual</h2>

      <ul className="listado-tareas">
        {tareasProyectos.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyectos.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>

            <button type="button"
            className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
      
    </Fragment>
  );
};

export default ListadoTarea;
