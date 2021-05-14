import React, {useReducer} from 'react';
import TareasContext from './TareasContext';
import TareasReducer from './TareasReducer';


const TareasState = props => {
    
    const stateInicial = {
        tareas : [
            { nombre: "Elegir Plataforma", estado: true, proyectoId: 1},
            { nombre: "Elegir Colores", estado: true, proyectoId: 2},
            { nombre: "Elegir Iterar", estado: false, proyectoId: 3 },
            { nombre: "Seleccionar Desayuno", estado: false, proyectoId: 4 },
            { nombre: "Peatonal", estado: true, proyectoId: 1},
            { nombre: "Elegir Colores", estado: true, proyectoId: 2},
            { nombre: "Imagen", estado: false, proyectoId: 2 },
            { nombre: "Todo bien", estado: false, proyectoId: 3 },
        ]
    }

    const [state, dispatch] = useReducer(TareasReducer, stateInicial)

    return ( 
        <TareasContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </TareasContext.Provider>
     );
}
 
export default TareasState;
