import React, { Component } from "react";
import { Card, CardHeader } from "react-simple-card";
import "../../../src/App.css";
import "../../../../scrum-app/node_modules/font-awesome/css/font-awesome.min.css";

import Avatar from "@material-ui/core/Avatar";
class CardUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <CardHeader
          style={{
            backgroundImage:
              "url(https://i.ytimg.com/vi/PUOun9RImC8/maxresdefault.jpg)",
            height: "12vw",
            width: "120vw"
          }}
        >
          {" "}
        </CardHeader>
        <Avatar
          className="mx-auto white "
          style={{
            width: "12vw",
            marginTop: "-50px",
            height: "12vw",
            zIndex: "10",
            border: "3px solid white"
          }}
        >
          <img src={this.props.photo} />
        </Avatar>

        <div
          style={{
            width: "20vw",
            marginLeft: "40vw"
          }}
        >
          {" "}
          <h4 className="font-weight-bold mb-3">{this.props.user.fullname}</h4>
          <p className="font-weight-bold" style={{ color: "#880e4f" }}>
            {this.props.user.status}
          </p>
        </div>
      </Card>
    );
  }
}

export default CardUser;
