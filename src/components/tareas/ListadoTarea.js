import React, { Fragment, useContext } from "react";
import Tarea from "../tareas/Tarea";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const ListadoTarea = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoActual, eliminarProyecto } = proyectoContext;

  // si no hay proyectos seleccionado
  if (!proyectoActual) return <h2>Seleccione un proyecto</h2>;

  const { id, nombre } = proyectoActual[0];

  const tareasProyectos = [];

  const eliminarProyectoClick = () => {
    eliminarProyecto(id);
  };

  return (
    <Fragment>
      <h2>Proyecto: {nombre}</h2>

      <ul className="listado-tareas">
        {tareasProyectos.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyectos.map((tarea) => (
            <Tarea key={tarea.nombre} tarea={tarea} />
          ))
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={eliminarProyectoClick}
      >
        Eliminar Proyecto &times;
      </button>
    </Fragment>
  );
};

export default ListadoTarea;
