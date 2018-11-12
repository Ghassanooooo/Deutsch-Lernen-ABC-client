import React, { Component } from "react";

import "./App.css";
import ColectionsCard from "./components/colectionsCard/colectionsCard";
import SubColections from "./components/subColections/subColections";
import SubColectionContent from "./components/subColectionContent/subColectionContent";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={ColectionsCard} />
          <Route path="/SubColections" exact component={SubColections} />
          <Route
            path="/SubColections/SubColectionContent/:id"
            exact
            component={SubColectionContent}
          />
        </Switch>

        {/* <SubColections />
        <SubColectionContent /> */}
      </div>
    );
  }
}

export default App;
