import React, { Component } from "react";
import "../../../src/App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../scrum-app/node_modules/font-awesome/css/font-awesome.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Project from "./Project";
import CardUser from "./Card";
import { Link } from "react-router-dom";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

class ScrumMaster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProject: [],
      showProject: "none",
      project: {},
      member: {},
      photomaster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQr5OhySrgQ2CSOwU0M5TbRy1rhM0Ni96_39-Defx16cpqGdbkA"
    };
  }

  componentDidMount() {
    axios
      .get(`/member/${this.props.id}`)
      .then(res => this.setState({ member: res.data }));
  }

  listProject = () => {
    axios.get("/listProject").then(res => {
      const listProject = res.data;
      this.setState({ listProject });
      console.log(res.data);
    });
  };
  showProject = el => {
    this.setState({ showProject: "block" });
    this.setState({ project: el });
  };
  render() {
    return (
      <div className="bodybg">
        <nav className="navbar navbar-default navheader">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            SCRUM APP
          </a>

          <ul className="nav navbar-nav navbar-right connect ">
            <Link to="/home">
              <i className="fa fa-sign-out" style={{ color: "white" }}>
                Log Out
              </i>
            </Link>
          </ul>
        </nav>
        <CardUser user={this.state.member} photo={this.state.photomaster} />

        <SideNav
          style={{
            backgroundColor: "rgb(99, 10, 57)",
            marginTop: "16vw",
            height: "100vw"
          }}
          onSelect={selected => {
            // Add your code here
          }}
        >
          <SideNav.Toggle />
          <SideNav.Nav defaultSelected="projects">
            <NavItem eventKey="projects">
              <NavIcon>
                <i
                  style={{ fontSize: "1.75em" }}
                  className="fa fa-fw fa-list-alt"
                />
              </NavIcon>

              <NavText style={{ fontSize: "1.5vw" }} onClick={this.listProject}>
                Projects
              </NavText>

              {this.state.listProject.map(el => (
                <NavItem eventKey={el.projectname}>
                  <NavText
                    style={{ fontSize: "1.2vw" }}
                    onClick={() => this.showProject(el)}
                  >
                    {el.projectname}
                  </NavText>
                </NavItem>
              ))}
            </NavItem>
          </SideNav.Nav>
        </SideNav>
        <div style={{ display: this.state.showProject }}>
          <Project project={this.state.project} />
        </div>
      </div>
    );
  }
}

export default ScrumMaster;
