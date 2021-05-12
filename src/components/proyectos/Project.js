import React from 'react';
import Sidebar from '../layout/Sidebar'
import BarraTop from '../layout/BarraTop'
import FormTarea from '../tareas/FormTarea'
import ListadoTarea from '../tareas/ListadoTarea'

const Project = () => {
    return ( 
        <div className="contenedor-app">
            <Sidebar />
            <section className="seccion-principal">
                <BarraTop />
                <main>
                    <FormTarea />
                    <div className="contenedor-tareas">
                        <ListadoTarea />
                    </div>
                </main>
            </section>
        </div>
        );
}
 
export default Project;