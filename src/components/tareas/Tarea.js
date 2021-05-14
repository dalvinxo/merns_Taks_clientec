import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareasContext from "../../context/tareas/TareasContext";

const Tarea = ({ tarea }) => {
  
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectoContext;

  const tareaContext = useContext(TareasContext);
  const { seleccionarTareaProyecto, eliminarTarea, estadoTarea, guardarTarea } = tareaContext;

  const [proyectostareas] = proyectoActual;

  const eliminarTareaFn = (id) => {
    eliminarTarea(id);
    seleccionarTareaProyecto(proyectostareas.id);
  };

  const cambiarEstado = (tarea) => {
    tarea.estado = !tarea.estado;
    estadoTarea(tarea);
  };

  const editTareaSelect = tarea =>{
    guardarTarea(tarea);
  }

  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={()=>cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={()=>cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>

      <div className="acciones">
        <button 
        type="button" 
        className="btn btn-primario" 
        onClick={()=> editTareaSelect(tarea)}>
          Editar
        </button>

        <button
          type="button"
          className="btn btn-secondario"
          onClick={() => eliminarTareaFn(tarea.id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
