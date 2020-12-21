import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Home from "./components/Home";
import ViewProduct from "./components/ViewProduct";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/product/:productId">
            <ViewProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
