import React, { Component } from "react";
import ProjectItem from "./project/ProjectItem";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <ProjectItem />
        <h1>Welcome to the dashboard</h1>
      </div>
    );
  }
}
