import React, { Component } from "react";
import SignUp from "./SignUp";
import Home from "./Home";
import Login from "./Login";
import { Route } from "react-router-dom";
import ProductOwner from "./ProductOwner/ProductOwner";
import ScrumMaster from "./ScrumMaster/ScrumMaster";
class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signUp" component={SignUp} />
        <Route
          exact
          path="/scrummaster/:id"
          render={props => <ScrumMaster id={props.match.params.id} />}
        />
        <Route
          exact
          path="/productowner/:id"
          render={props => <ProductOwner id={props.match.params.id} />}
        />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/modifyContact/:id"
          render={props => <SignUp id={props.match.params.id} />}
        />
      </div>
    );
  }
}

export default Routes;
