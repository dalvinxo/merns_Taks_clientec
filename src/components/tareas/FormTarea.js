import React, { useContext, useState, useEffect } from "react";
import ProyectoContext from "../../context/proyectos/ProyectoContext";
import TareasContext from "../../context/tareas/TareasContext";

const FormTarea = () => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyectoActual } = proyectoContext;

  const tareasContext = useContext(TareasContext);
  const {
    errorTarea,
    tareaSeleccionada,
    seleccionarTareaProyecto,
    agregarTarea,
    validarTarea,
    actualizarTarea,
    limpiarTareaSeleccionada
  } = tareasContext;

  const [tarea, setTarea] = useState({
    nombre: "",
  });

  useEffect(() => {

    if (tareaSeleccionada === null) {
      setTarea({
        nombre: "",
      });
    } else {
      setTarea(tareaSeleccionada);
    }
  }, [tareaSeleccionada]);

  if (!proyectoActual) return null;

  const { nombre } = tarea;

  const handlerChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const submitTarea = (e) => {
    e.preventDefault();

    //validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    //agregar la nueva tarea al state de tareas
    // identificacion de edicion de tarea
    if (tareaSeleccionada === null){
      tarea.proyectoId = proyectoActual[0].id;
      tarea.estado = false;
      agregarTarea(tarea);
    }else{
      // actualizando tarea existente
      actualizarTarea(tarea);
      limpiarTareaSeleccionada();
    }


    //obtener tareas y filtrarlas
    seleccionarTareaProyecto(proyectoActual[0].id);

    //reiniciar el form
    setTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={submitTarea}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="nombre"
            onChange={handlerChange}
            value={nombre}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaSeleccionada ? "Editar Tarea" : "Agregar Tarea"}
          />
        </div>
      </form>

      {errorTarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTarea;
