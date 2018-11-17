import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import InputFild from "../common/input/input";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.login(
      {
        email: this.state.email,
        password: this.state.password
      },
      this.props.history
    );
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.props;
    console.log(errors);
    return (
      <Fragment>
        <h3>Login</h3>
        <form onSubmit={this.onSubmitHandler}>
          <InputFild
            value={this.state.email}
            name="email"
            label="Email"
            type="email"
            onChange={this.onChangeHandler}
            errors={errors}
            placeholder="Your Email"
          />
          <InputFild
            value={this.state.password}
            name="password"
            label="Password"
            type="password"
            placeholder="Your Password"
            onChange={this.onChangeHandler}
            errors={errors}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(Login));
