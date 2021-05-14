import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const Proyecto = ({ proyecto }) => {
  //obtener state formulario
  const proyectosContext = useContext(ProyectoContext);
  const { seleccionarProyecto } = proyectosContext;

  return (
    <li>
      <button
        onClick={() => seleccionarProyecto(proyecto.id)}
        type="button"
        className="btn btn-blank"
      >
        {proyecto.nombre}
      </button>
    </li>
  )
  
};

export default Proyecto;
