import React, { Component, Fragment } from "react";
import InputFild from "../common/input/input";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

class AddLevel extends Component {
  state = {
    titeldeutsch: "",
    beschreibungdeutsch: "",
    titelarabisch: "",
    beschreibungarabisch: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();
    this.props.addLevel({
      titeldeutsch: this.state.titeldeutsch,
      beschreibungdeutsch: this.state.beschreibungdeutsch,
      titelarabisch: this.state.titelarabisch,
      beschreibungarabisch: this.state.beschreibungarabisch
    });
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.props;
    return (
      <Fragment>
        <h3>Add New Level</h3>
        <form onSubmit={this.onSubmitHandler}>
          <InputFild
            name="titeldeutsch"
            value={this.state.titeldeutsch}
            onChange={this.onChangeHandler}
            errors={errors}
            label="German Title"
            placeholder="Add Title in German"
          />
          <InputFild
            name="beschreibungdeutsch"
            value={this.state.beschreibungdeutsch}
            onChange={this.onChangeHandler}
            errors={errors}
            label="German Discription"
            placeholder="Add Discription in German"
          />
          <InputFild
            name="titelarabisch"
            value={this.state.titelarabisch}
            onChange={this.onChangeHandler}
            errors={errors}
            label="Arabic Title"
            placeholder="Add Title in Arabic"
          />

          <InputFild
            name="beschreibungarabisch"
            value={this.state.beschreibungarabisch}
            onChange={this.onChangeHandler}
            errors={errors}
            label="Arabic Discription"
            placeholder="Add Discription in Arabic"
          />

          <button type="submit" className="btn btn-primary">
            ADD NEW LEVEL
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
)(withRouter(AddLevel));
