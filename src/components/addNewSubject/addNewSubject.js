import React, { Component, Fragment } from "react";
import InputFild from "../common/input/input";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAxiosAuth from "../../setAxiosAuthHeader";

class AddNewSubject extends Component {
  componentDidMount() {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      setAxiosAuth(token);
      const userDecoded = jwt_decode(token);
      if (userDecoded) {
        this.props.currentUser(userDecoded);
      }
    }
  }
  state = {
    titeldeutsch: "",
    titelarabisch: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();

    // axios
    //   .post(
    //     "https://deutsch-lernen-abc.herokuapp.com/api/subject/add/" +
    //       this.props.match.params.id,
    //     {
    //       titeldeutsch: this.state.titeldeutsch,
    //       titelarabisch: this.state.titelarabisch
    //     }
    //   )
    //   .then(subject => this.props.history.push(`/subject/${subject.data._id}`));

    this.props.addSubject(
      {
        titeldeutsch: this.state.titeldeutsch,
        titelarabisch: this.state.titelarabisch
      },
      this.props.match.params.id,
      this.props.history
    );
    console.log(this.props.match.params.id);
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.props;
    return (
      <Fragment>
        <h3>Add a new Subject</h3>
        {this.props.match.params.id && (
          <form onSubmit={this.onSubmitHandler}>
            <InputFild
              name="titeldeutsch"
              value={this.state.titeldeutsch}
              onChange={this.onChangeHandler}
              label="German Title"
              placeholder="Add Title in German"
            />
            <InputFild
              name="titelarabisch"
              value={this.state.titelarabisch}
              onChange={this.onChangeHandler}
              label="Arabic Title"
              placeholder="Add Title in Arabic"
            />
            <button type="submit" className="btn btn-primary">
              ADD Subject
            </button>
          </form>
        )}
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
)(withRouter(AddNewSubject));
