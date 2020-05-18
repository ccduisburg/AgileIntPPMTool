import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/project/AddProject";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exect path="/dashboard" component={Dashboard} />
        <Route exect path="/addProject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
