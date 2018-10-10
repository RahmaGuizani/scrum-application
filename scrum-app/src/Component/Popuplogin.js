import React from "react";
/*import Popup from "react-popup";*/
import axios from "axios";
import { Redirect } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class PopUpLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.state = {
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
      this.setState({
        team: res.data
      });
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
      } else {
        console.log("user not found");
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
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <p onClick={this.handleClickOpen}>LogIn</p>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Connect to Scrum </DialogTitle>
          <DialogContent>
            <DialogContentText>
              {" "}
              To connect to scrum please enter your FullName and Password
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Fullname"
              type="textarea"
              fullWidth
              onChange={e => {
                this.setState({ fullname: e.target.value });
              }}
            />
            <TextField
              autoFocus
              margin="dense"
              id=""
              label="Password"
              type="password"
              fullWidth
              onChange={e => this.setState({ password: e.target.value })}
            />
          </DialogContent>
          <DialogActions id="pop-buttom">
            {this.renderRedirect()}
            <input
              className=" btn btn-primary"
              type="submit"
              onClick={this.authentication}
              value="Login"
            />
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PopUpLogin;
