import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      photo: "",
      email: "",
      status: "",
      password: "",
      confirmpassword: "",
      team: [],
      redirect: false,
      id: ""
    };
  }

  componentDidMount() {
    axios.get(`/user`).then(res => {
      console.log(res.data);
    });
  }

  authentication = () => {
    console.log(this.state.team);
    this.state.team.map(el => {
      if (
        el.fullname == this.state.fullname &&
        el.password == this.state.password
      ) {
        console.log("user found");
        this.setState({ status: el.status });
        this.setState({ id: el._id });

        this.setState({ redirect: true });
      }
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      switch (this.state.status) {
        case "Product Owner":
          return <Redirect to={`/productowner/${this.state.id}`} />;
        case "Scrum Master":
          return <Redirect to={`/scrummaster/${this.state.id}`} />;
      }
    }
  };

  /*        <form action="/authentify" method="post">
*/
  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          {" "}
          <label>Fullname</label>
          <input
            type="text"
            name="fullname"
            onChange={e => this.setState({ fullname: e.target.value })}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
          {this.renderRedirect()}
          <button className="btn btn-primary" onClick={this.authentication}>
            login
          </button>
        </form>
        <h1>
          title:
          {this.state.status}
        </h1>
      </div>
    );
  }
}

export default Login;
