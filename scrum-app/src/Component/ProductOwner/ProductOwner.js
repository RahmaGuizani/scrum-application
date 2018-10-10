import React, { Component } from "react";
import "../../../src/App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../../scrum-app/node_modules/font-awesome/css/font-awesome.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import Card from "./../ScrumMaster/Card";
import { Link, Redirect } from "react-router-dom";

import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import Popup from "./PopUp.js";
import PopUpModify from "./PopupModify.js";
import PopUpDelete from "./PopupDelete.js";
class ProductOwner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProject: [],
      member: {},
      photo:
        "http://res.cloudinary.com/hzxejch6p/image/upload/c_scale,w_200/v1395151180/profilePictureDF_1_xc21b8.jpg"
    };
  }
  listProject = () => {
    axios.get("/listProject").then(res => {
      const listProject = res.data;
      this.setState({ listProject });
      console.log(res.data);
    });
  };
  editProject = id => {
    return <Popup />;
  };
  componentDidMount() {
    axios
      .get(`/member/${this.props.id}`)
      .then(res => this.setState({ member: res.data }));
  }
  logout = () => {
    return <Redirect to="/home" />;
  };
  render() {
    return (
      <div>
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

        <Card user={this.state.member} photo={this.state.photo} />
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
                  <NavText style={{ fontSize: "1.2vw" }}>
                    {el.projectname}{" "}
                    <div className="modify-project">
                      <PopUpModify modify={el} />
                      <PopUpDelete delete={el} />
                    </div>
                  </NavText>
                </NavItem>
              ))}
            </NavItem>
            <NavItem eventKey="create-project">
              <NavIcon>
                <i
                  style={{ fontSize: "1.75em" }}
                  className="fa fa-fw fa-plus"
                />
              </NavIcon>
              <NavText>
                <Popup />
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default ProductOwner;
