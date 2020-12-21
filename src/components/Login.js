import React, { useState } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
// import { register } from "./serviceWorker";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  paper: {
    padding: "80px",
    display: "flex",
    flexDirection: "column",
  },
  inputs: {
    margin: "15px 0px 10px 0px",
    width: "100%",
  },
}));

function Login() {
  const classes = useStyles();

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (event) => {
    event.preventDefault(); //stop refreshing

    //login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => alert(e.message));
  };
  const registerFunc = (event) => {
    event.preventDefault(); //stop refreshing
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => history.push("/"))
      .catch((e) => alert(e.message));
    //login logic
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <h1>Sign In</h1>
        <div style={{ border: "1px solid #3f51b5" }}></div>
        <p>We'll never share your credentials with anyone else.</p>
        <TextField
          className={classes.inputs}
          type="text"
          id="standard-basic"
          label="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          type="password"
          id="standard-basic"
          label="Password"
          className={classes.inputs}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          style={{ margin: "30px 0" }}
          color="primary"
          variant="contained"
          onClick={login}
        >
          Sign in
        </Button>
        <Button variant="contained" onClick={registerFunc}>
          Create new account
        </Button>
      </Paper>
    </div>
  );
}

export default Login;
