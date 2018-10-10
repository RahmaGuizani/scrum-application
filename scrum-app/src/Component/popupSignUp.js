import React from "react";
/*import Popup from "react-popup";*/
import axios from "axios";
import "./../App.css";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { Link } from "react-router-dom";
class PopUpSinup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      photo:
        "http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png",
      email: "",
      status: "",
      password: "",
      confirmpassword: "",
      error: ""
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleConfirmPassword = event => {
    this.setState({ confirmpassword: event.target.value });
  };
  vp = () => {
    if (this.state.photo === "") {
      alert("Missing a photo");
    }
  };

  addUser = () => {
    /* let re = /[a-z]/g;
    let re1 = /[A-Z]/g;
    let re2 = /[0-9]/g;
    let remail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let rname = /^[a-zA-Z]+$/;
    let rph = this.state.photo.slice(-3);
    console.log(rph);
    //confirme all input

    //verifier name
    if (
      this.state.photo ==
      "http://www.clker.com/cliparts/b/1/f/a/1195445301811339265dagobert83_female_user_icon.svg.med.png"
    ) {
      alert("verify your informations");
    } else if (
      this.state.fullname.length < 6 ||
      this.state.fullname.length > 30 ||
      re.test(this.statefullname) === false
    ) {
      alert("Weak name");
    } else if (rname.test(this.state.fullname) === false) {
      alert("Fullname must be a string");
    }
    //verifier email
    else if (remail.test(this.state.email) === false) {
      alert("Email invalid");
    } //verifier status
    else if (this.state.status === "") {
      alert("Staut invalid");
    } //verifier password
    else if (this.state.password.length < 8) {
      alert("Lower lenght of password");
    } else if (this.state.password.length > 30) {
      alert("Long lenght");
    } else if (re.test(this.state.password) === false) {
      alert("missing a lower letter in the password ");
    } else if (re1.test(this.state.password) === false) {
      alert("missing a Capital letter  in the password ");
    } else if (re2.test(this.state.password) === false) {
      alert("missing Number in the password ");
    }
    //confirmation password
    else if (this.state.confirmpassword !== this.state.password) {
      alert("Password non confirme");
    } else {*/
    axios
      .post("/addUser", {
        fullname: this.state.fullname,
        photo: this.state.photo,
        email: this.state.email,
        status: this.state.status,
        password: this.state.password,
        confirmpassword: this.state.confirmpassword
      })
      .then(res => alert(res.data))
      .catch(err => alert(err));
  };

  getList = l => {
    this.setState({ backloglist: l });
  };
  handleChangeImage = event => {
    this.setState({
      photo: URL.createObjectURL(event.target.files[0])
    });
  };
  render() {
    return (
      <div>
        <p onClick={this.handleClickOpen}>SignUp</p>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Scrum Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText />

            <label for="file" className="input-label">
              <img
                className="img-singup"
                src={this.state.photo}
                width="70vw"
                height="60vw"
              />
            </label>
            <label className="TEXT-label">Select your Photo</label>
            <TextField
              autoFocus
              margin="dense"
              id="file"
              type="file"
              fullWidth
              onChange={e => this.handleChangeImage(e)}
            />

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
              id="name"
              label="Email"
              type="email"
              fullWidth
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
              errorText={this.state.error}
            />
            <div>
              <select
                className="styled-select"
                value={this.state.status}
                onChange={e => {
                  this.setState({ status: e.target.value });
                }}
              >
                {" "}
                <option className="styled-select-name" />
                <option className="styled-select-name" value="Product Owner">
                  Product Owner
                </option>
                <option className="styled-select-name" value="Scrum Master">
                  Scrum Master
                </option>
                <option className="styled-select-name" value="designer">
                  designer
                </option>
                <option className="styled-select-name" value="developer">
                  developer
                </option>
                <option className="styled-select-name" value="tester">
                  tester
                </option>
              </select>
            </div>
            <TextField
              autoFocus
              margin="dense"
              id=""
              label="Password"
              type="password"
              fullWidth
              onChange={this.handlePasswordChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id=""
              label="Confirm Password"
              type="password"
              fullWidth
              onChange={this.handleConfirmPassword}
            />
          </DialogContent>
          <DialogActions id="pop-buttom">
            <Link to="/home">
              <input
                className=" btn btn-primary"
                type="submit"
                onClick={this.addUser}
                value="SignUp"
              />
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default PopUpSinup;
