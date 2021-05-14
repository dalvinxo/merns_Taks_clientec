import React, { Fragment, useState, useContext } from "react";
import ProyectoContext from '../../context/proyectos/ProyectoContext'


const NuevoProyecto = () => {

  //obtener state formulario
  const proyectosContext = useContext(ProyectoContext)
  const {nuevoProyecto, errorProyecto, mostrarFormulario, agregarProyecto, mostrarError} = proyectosContext;


    //state proyecto
    const [project, setProject] = useState({
        id : '',
        nombre: ''
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
        if (nombre === ''){
          mostrarError();
          return;
        }


        // Agregar a proyecto
        agregarProyecto(project);
 
        // Reiniciar nombre
        setProject({
          id:'',
          nombre:''
        })

        



    }


  return (
    <Fragment>
      <button type="button" className="btn btn-block btn-primario"
        onClick={()=> mostrarFormulario()}
      >
        Nuevo Proyecto
      </button>
      
      {nuevoProyecto ?
      (
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


        {errorProyecto?(
          <p className="mensaje error">El nombre del proyecto es obligatorio</p>
        ):null}

    </form>
      ) :
      null
       }
      
    </Fragment>
  );
};

export default NuevoProyecto;
