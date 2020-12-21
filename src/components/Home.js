import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { Container } from "@material-ui/core";
import ProductCard from "./ProductCard";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Home() {
  const [{ user }, dispatch] = useStateValue();
  const classes = useStyles();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Welcome
          </Typography>
          <Link to={!user && "/login"}>
            <Button onClick={login} style={{ color: "white" }}>
              {user ? "logout" : "login"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <h1> Products...</h1>
        <ProductCard />
      </Container>
    </div>
  );
}
