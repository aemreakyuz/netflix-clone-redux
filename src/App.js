import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  const user = false;

  return (
    <div className="app">
      <Switch>
        {!user ? (
          <Route>
            <Login exact path="/login" />
          </Route>
        ) : (
          <>
            <Route exact path="/">
              <Home />
            </Route>
          </>
        )}
      </Switch>
    </div>
  );
}

export default App;
