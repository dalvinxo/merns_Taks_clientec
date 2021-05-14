import React, { useContext } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";

const FormTarea = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectoContext;

  if (!proyectoActual) return null;

  return (
    <div className="formulario">
      <form>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
          />
        </div>
        <div className="contenedor-input">
          <input
            type="text"
            className="btn btn-primario btn-submit btn-block"
            value="Agregar Tarea"
          />
        </div>
      </form>
    </div>
  );
};

export default FormTarea;
