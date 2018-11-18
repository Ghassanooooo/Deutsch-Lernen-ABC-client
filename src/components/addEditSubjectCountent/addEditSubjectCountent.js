import React, { Component, Fragment } from "react";
import InputFild from "../common/input/input";
import axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../store/actions";

class AddEditSubjectCountent extends Component {
  state = {
    beschreibung: "",
    inhaltenDeutsch: "",
    inhaltenArabisch: "",
    beispielenDeutsch: "",
    beispielenArabisch: ""
  };
  onSubmitHandler = e => {
    e.preventDefault();

    const SubjectCountentData = {
      beschreibung: this.state.beschreibung,
      inhaltenDeutsch: this.state.inhaltenDeutsch,
      inhaltenArabisch: this.state.inhaltenArabisch,
      beispielenDeutsch: this.state.beispielenDeutsch,
      beispielenArabisch: this.state.beispielenArabisch
    };
    axios
      .post(
        "http://localhost:5000/api/subjectContent/add/" +
          this.props.match.params.id,
        SubjectCountentData
      )
      .then(res => {
        this.props.history.push("/subject/subject-content/" + res.data._id);
      });

    // this.props.addSubjectCountent(
    //   this.props.match.params.id,
    //   SubjectCountentData,
    //   this.props.history
    // );
    // console.log(this.props.match.params.id);
  };
  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { errors } = this.props;
    return (
      <Fragment>
        <h3>Add a new Subject Countent</h3>
        {this.props.match.params.id && (
          <form onSubmit={this.onSubmitHandler}>
            <InputFild
              name="beschreibung"
              value={this.state.beschreibung}
              onChange={this.onChangeHandler}
              label="Description *"
              placeholder="Add some Description"
            />
            <InputFild
              name="inhaltenDeutsch"
              value={this.state.inhaltenDeutsch}
              onChange={this.onChangeHandler}
              label="Subject Countent German * Split the content by ,"
              placeholder="Split the content by ,"
            />
            <InputFild
              name="inhaltenArabisch"
              value={this.state.inhaltenArabisch}
              onChange={this.onChangeHandler}
              label="Subject Countent Arabic * Split the content by ,"
              placeholder="Split the content by ,"
            />
            <InputFild
              name="beispielenDeutsch"
              value={this.state.beispielenDeutsch}
              onChange={this.onChangeHandler}
              label="Examples German * Split the content by ,"
              placeholder="Split the content by ,"
            />
            <InputFild
              name="beispielenArabisch"
              value={this.state.beispielenArabisch}
              onChange={this.onChangeHandler}
              label="Examples Arabic * Split the content by ,"
              placeholder="Split the content by ,"
            />
            <button type="submit" className="btn btn-primary">
              ADD Subject Countent
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
)(withRouter(AddEditSubjectCountent));
