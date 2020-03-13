import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Home from "./Pages/Home/Home";
import BookDetails from "./Pages/Details/BookDetails";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact={true} path={"/"} component={Login} />
          <Route path={"/register"} component={Register} />
          <Route path={"/home"} component={Home} />
          <Route path={"/books/:id"} component={BookDetails} />
        </Router>
      </div>
    );
  }
}

export default App;
