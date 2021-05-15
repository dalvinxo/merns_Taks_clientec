import React from "react";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Project from "./components/proyectos/Project";
import { BrowserRouter as RouterAdmin, Switch, Route } from "react-router-dom";

import ProyectoState from "./context/proyectos/ProyectoState";
import TareasState from "./context/tareas/TareasState";
import AlertaState from "./context/alertas/alertaState";
import AuthState from "./context/autenticacion/authState";

function App() {
  return (
    <ProyectoState>
      <TareasState>
        <AlertaState>
          <AuthState>
            <RouterAdmin>
              <Switch>
                <Route exact path="/" component={Login}></Route>
                <Route exact path="/signup" component={Signup}></Route>
                <Route exact path="/project" component={Project}></Route>
              </Switch>
            </RouterAdmin>
          </AuthState>
        </AlertaState>
      </TareasState>
    </ProyectoState>
  );
}

export default App;
