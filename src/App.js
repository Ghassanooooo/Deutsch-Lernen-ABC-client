import React, { Component } from "react";

import "./App.css";
import Level from "./components/level/level";
import Subject from "./components/subject/subject";
import SubjectContent from "./components/subjectContent/subjectContent";
import AddNewSubject from "./components/addNewSubject/addNewSubject";
import EditSubject from "./components/editSubject/editSubject";
import { Route, Switch } from "react-router-dom";
import AddLevel from "./components/addLevel/addLevel";
import Navigation from "./components/navigation/navigation";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import addEditSubjectCountent from "./components/addEditSubjectCountent/addEditSubjectCountent";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import store from "./store";
import * as actions from "./store/actions";
import jwt_decode from "jwt-decode";
import setAxiosAuth from "./setAxiosAuthHeader";

class App extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      setAxiosAuth(token);
      const userDecoded = jwt_decode(token);
      if (userDecoded) {
        store.dispatch(actions.currentUser(userDecoded));
      }
    }
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <div className="container">
            <Route path="/" exact component={Level} />
            <Route path="/subject/:id" exact component={Subject} />
            <Route
              path="/subject/subject-content/:id"
              exact
              component={SubjectContent}
            />
            <PrivateRoute path="/level/add-level" exact component={AddLevel} />
            {/* <Route
            path="/SubColections/SubColectionContent/:id"
            exact
            component={SubColectionContent}
          /> */}

            <Route path="/login" exact component={Login} />

            <Route path="/signup" exact component={Signup} />

            <Route
              path="/add-new-subject/:id"
              exact
              component={AddNewSubject}
            />
            <Route
              path="/add-edit-new-subject-Countent/:id"
              exact
              component={addEditSubjectCountent}
            />

            <Route path="/edit-subject" exact component={EditSubject} />
          </div>
        </Switch>

        {/* <SubColections />
        <SubColectionContent /> */}
      </div>
    );
  }
}
export default App;
