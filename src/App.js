import React, { useEffect } from 'react';
import Login from "../src/views/login/login"
import SignUp from "../src/views/register/signup"
import dashboard from "../src/views/dashboard/dashboard"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom";


const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/auth/dashboard" component={dashboard} />
      </Switch>
    </Router>
  )
}

export default App
