import React, { Fragment, useState } from "react";

const NuevoProyecto = () => {



    //state proyecto
    const [project, setProject] = useState({
        nombre: '',
    });

    //destructering
    const {nombre} = project;

    const onUpdateProject = e =>{
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }


    const submitProject = e =>{
        e.preventDefault();

        // Validar el proyecto

        

    }


  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo Proyecto
      </button>
      <form onSubmit={submitProject} className="formulario-nuevo-proyecto">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Proyecto"
            name="nombre"
            onChange={onUpdateProject}
            value={nombre}
          />
          
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
      </form>
    </Fragment>
  );
};

export default NuevoProyecto;
