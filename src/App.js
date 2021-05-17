import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Project from "./components/proyectos/Project";
import { BrowserRouter as RouterAdmin, Switch, Route } from "react-router-dom";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareasState from "./context/tareas/TareasState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";
import tokenAuth from "./config/tokenAuth";
import RutaPrivada from "./rutas/RutaPrivada";

// Revisar si tenemos un token
const token = localStorage.getItem('token');
if(token) {
  tokenAuth(token);
}



function App() {

  

  return (
    <ProyectoState>
      <TareasState>
        <AlertaState>
          <AuthState>
            <RouterAdmin>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <RutaPrivada exact path="/project" component={Project} />
              </Switch>
            </RouterAdmin>
          </AuthState>
        </AlertaState>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
