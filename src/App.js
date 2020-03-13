import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import BookDetails from "./Pages/Details/BookDetails";
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact={true} path={"/"} component={Home} />
          <Route path={"/home"} component={Home} />
          <Route
            // path={"/books"}
            // component={BookDetails}
            path={"/books/:id"}
            component={BookDetails}
            // component={props => {
            //   return (
            //     <BookDetails
            //       {...this.props}
            //       bookURL={`http://localhost:3001/api/v1/books/${props.match.params}`}
            //       key={props.history.location}
            //     />
            //   );
            // }}
          />
        </Router>
      </div>
    );
  }
}

export default App;
