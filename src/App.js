import 'bootstrap/dist/css/bootstrap.css';

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/login";
import Register from "./components/Register";
import homepage from "./components/homepage";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-5">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={homepage} />
          </Switch>
        </div>
      </Router>
    </>
  );
}


export default App;
