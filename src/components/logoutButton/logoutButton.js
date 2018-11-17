import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

class LogoutButton extends Component {
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.logout(this.props.history);
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <button type="submit" className="btn btn-primary">
          Logout
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(LogoutButton));
