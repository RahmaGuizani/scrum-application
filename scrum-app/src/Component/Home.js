import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PopUpLogin from "./Popuplogin";
import "../../src/App.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import PopUpSinup from "./popupSignUp";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /* <Link to="/signup">
            <button>Sign Up</button>
          </Link>
          <Link to="/login">
            <button>Login</button>

          </Link>
 */
  render() {
    return (
      <div>
        <nav className="navbar navbar-default navmenu">
          <a
            className="navbar-brand"
            href="#"
            style={{ color: "white", marginRight: "70vw", fontSize: "2vw " }}
          >
            SCRUM APP
          </a>

          <ul className="nav navbar-nav navbar-right connect ">
            <li
              style={{
                color: "white",
                marginTop: "-1vw",
                marginLeft: "60vw",
                fontSize: "1.5vw "
              }}
            >
              <NavItem eventKey="projects">
                <NavText>
                  <PopUpSinup />
                </NavText>
              </NavItem>
            </li>
            <li
              style={{
                color: "white",
                marginLeft: "80vw",
                marginTop: "-3.4vw",
                fontSize: "1.5vw "
              }}
            >
              <NavItem eventKey="projects">
                <NavText>
                  <PopUpLogin />
                </NavText>
              </NavItem>
            </li>
          </ul>
        </nav>
        <div className="home">
          <div className="slider">
            <ul>
              <li>
                <img
                  style={{
                    height: "500px",
                    width: "1365px"
                  }}
                  src="https://www.manutan.fr/blog/wp-content/uploads/2018/08/RS17034_Scrum-Techniek-iets-voor-jouw-team.jpg"
                />
              </li>
              <li>
                <img
                  style={{
                    height: " 500px",
                    width: "1365px"
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS74H6SGWPAUi4OEYDLzFZRjwoCNvqP50JkbiUDHB_Lw6T5W__y"
                />
              </li>
              <li>
                <img
                  style={{
                    height: " 500px",
                    width: "1365px"
                  }}
                  src="https://previews.123rf.com/images/vadimgozhda/vadimgozhda1410/vadimgozhda141000597/32387882-business-conference-business-meeting-business-people-in-formalwear-discussing-something-while-sittin.jpg"
                />
              </li>

              <li>
                <img
                  style={{
                    height: " 500px",
                    width: "1365px"
                  }}
                  src="https://s3.envato.com/files/134689765/preview.jpg"
                />
              </li>
              <li>
                <img
                  style={{
                    height: " 500px",
                    width: "1365px"
                  }}
                  src="https://sd-cdn.fr/wp-content/uploads/2018/08/avantages-des-me%CC%81thodes-Agile-cascade-scrum.jpg"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
