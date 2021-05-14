import React, { Fragment, useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Tarea from "../tareas/Tarea";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareasContext from "../../context/tareas/TareasContext";

const ListadoTarea = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoActual, eliminarProyecto } = proyectoContext;

  const tareaContext = useContext(TareasContext);
  const { tareasProyectos } = tareaContext;

  // si no hay proyectos seleccionado
  if (!proyectoActual) return <h2>Seleccione un proyecto</h2>;

  const { id, nombre } = proyectoActual[0];

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
          <TransitionGroup>
            {tareasProyectos.map((tarea) => (
              <CSSTransition
                key={tarea.id}
                timeout={200}
                classNames="tarea"
              >
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
