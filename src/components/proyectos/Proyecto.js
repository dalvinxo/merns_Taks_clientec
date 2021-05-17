import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareasContext from "../../context/tareas/TareasContext";

const Proyecto = ({ proyecto }) => {
  //obtener state formulario
  const proyectosContext = useContext(ProyectoContext);
  const { seleccionarProyecto } = proyectosContext;

  const  tareaContext = useContext(TareasContext);
  const { seleccionarTareaProyecto } = tareaContext;

  // funciones para agregar el proyecto actual
  const selectProject = id =>{
    seleccionarProyecto(id);
    seleccionarTareaProyecto(id);

  }

  return (
    <li>
      <button
        onClick={() => selectProject(proyecto.id)}
        type="button"
        className="btn btn-blank"
      >
        {proyecto.nombre}
      </button>
    </li>
  )
  
};

export default Proyecto;
