import React, { Component } from "react";

import "./App.css";
import ColectionsCard from "./components/colectionsCard/colectionsCard";
import SubColections from "./components/subColections/subColections";
import SubColectionContent from "./components/subColectionContent/subColectionContent";

import AddNewSubject from "./components/addNewSubject/addNewSubject";
import EditSubject from "./components/editSubject/editSubject";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={ColectionsCard} />
          <Route path="/SubColections/:id" exact component={SubColections} />
          <Route
            path="/SubColections/SubColectionContent/:id"
            exact
            component={SubColectionContent}
          />
          <Route
            path="/SubColections/SubColectionContent/:id"
            exact
            component={SubColectionContent}
          />

          <Route path="/add-new-subject" exact component={AddNewSubject} />

          <Route path="/edit-subject" exact component={EditSubject} />
        </Switch>

        {/* <SubColections />
        <SubColectionContent /> */}
      </div>
    );
  }
}

export default App;
