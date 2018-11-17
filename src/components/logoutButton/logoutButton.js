import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

class LogoutButton extends Component {

  logoutHandler=()=>{
this.props.logout()
    this.props.history.push("/")
  }
  render() {
    return (

        <button type="button" onClick={this.logoutHandler} className="btn btn-primary">
          Logout
        </button>

    );
  }
}

export default connect(
  null,
  actions
)(withRouter(LogoutButton));
