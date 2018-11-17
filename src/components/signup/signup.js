import React, { Component, Fragment } from "react";
import InputFild from "../common/input/input";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.signup(
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword
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
        <h3>Signup</h3>
        <form onSubmit={this.onSubmitHandler}>
          <InputFild
            name="username"
            value={this.state.username}
            onChange={this.onChangeHandler}
            label="User Name"
            placeholder="Your user Name"
            errors={errors}
          />
          <InputFild
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
            label="Email"
            type="email"
            placeholder="Your Email"
            errors={errors}
          />
          <InputFild
            value={this.state.password}
            onChange={this.onChangeHandler}
            label="Password"
            name="password"
            type="password"
            placeholder="Your Password"
            errors={errors}
          />
          <InputFild
            value={this.state.confirmPassword}
            name="confirmPassword"
            onChange={this.onChangeHandler}
            label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            errors={errors}
          />
          <button type="submit" className="btn btn-primary">
            Signup
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
)(withRouter(Signup));
