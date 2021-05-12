import React from 'react';
import Proyecto from './Proyecto'

const ListadoProyecto = ()=>{

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Clase virtual'},
        {nombre: 'Muelle limpieza'}
    ]

    return(
        <ul className="listado-proyectos">
            {proyectos.map(py =>(
                <Proyecto
                    key={py.nombre}
                    proyecto={py}
                />
            ))}
        </ul>
    );
}

export default ListadoProyecto;