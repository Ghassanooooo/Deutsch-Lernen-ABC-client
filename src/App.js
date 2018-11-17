import React, { Component } from "react";

import "./App.css";
import Level from "./components/level/level";
import Subject from "./components/subject/subject";
import SubColectionContent from "./components/subColectionContent/subColectionContent";
import AddNewSubject from "./components/addNewSubject/addNewSubject";
import EditSubject from "./components/editSubject/editSubject";
import { Route, Switch } from "react-router-dom";
import AddLevel from "./components/addLevel/addLevel";
import Navigation from "./components/navigation/navigation";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Level} />
          <Route path="/SubColections/:id" exact component={Subject} />
          <Route
            path="/SubColections/SubColectionContent/:id"
            exact
            component={SubColectionContent}
          />
          <Route path="/level/add-level" exact component={AddLevel} />
          <Route
            path="/SubColections/SubColectionContent/:id"
            exact
            component={SubColectionContent}
          />

          <Route path="/login" exact component={Login} />

          <Route path="/signup" exact component={Signup} />

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
