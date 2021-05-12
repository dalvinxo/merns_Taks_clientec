import React from 'react';

const BarraTop = () => {
    return ( 
        <header className="app-header">
            <p className="nombre-usuario">Bienvenido <span>Pablo Molina</span></p>

            <nav className="nav-principal">
                <a href="#!">Cerrar Sesión</a>
            </nav>

        </header>
     );
}
 
export default BarraTop;