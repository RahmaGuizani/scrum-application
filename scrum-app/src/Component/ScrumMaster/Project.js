import React, { Component } from "react";
import "../../../src/App.css";
import UserStory from "./UserStory.js";
import "bootstrap/dist/css/bootstrap.min.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBackLog: "none",
      showProject: "block",
      list: []
    };
  }
  showBackLog = () => {
    this.setState({ showBackLog: "block" });
    this.setState({ showProject: "none" });
    this.setState({ list: this.props.project.backloglist });
  };
  render() {
    return (
      <div className="bodybg">
        <div
          className="project-container"
          style={{ display: this.state.showProject }}
        >
          <ul className="list-group list-group-flush ">
            <li
              className="list-group-item detail-item"
              style={{ backgroundColor: "#b2ebf2" }}
            >
              Project Details
            </li>
            <li className="list-group-item detail-item">
              <label className="projectpropertie-container label-detail">
                Project name: {this.props.project.projectname}
              </label>
            </li>
            <li className="list-group-item detail-item ">
              {" "}
              <label className="projectpropertie-container label-detail">
                Description:
                {this.props.project.description}
              </label>
            </li>
            <li className="list-group-item detail-item">
              <label className="projectpropertie-container label-detail">
                Start date:
                {this.props.project.startdate}
              </label>
            </li>
            <li className="list-group-item detail-item">
              <label className="projectpropertie-container label-detail">
                Finish date: {this.props.project.finishdate}
              </label>
            </li>
            <li
              className="list-group-item detail-item"
              onClick={this.showBackLog}
            >
              <label className="projectpropertie-container label-detail">
                Backlog List
              </label>
            </li>
          </ul>
        </div>
        <div
          style={{ display: this.state.showBackLog }}
          className="backlog-container"
        >
          <UserStory tasks={this.state.list} />
        </div>
      </div>
    );
  }
}

export default Project;
