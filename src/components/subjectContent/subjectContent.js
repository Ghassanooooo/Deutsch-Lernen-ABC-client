import React, { Component, Fragment } from "react";
import { withRouter, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Spinner from "../common/spinner/spinner";

class subjectContent extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSubjectsContent(this.props.match.params.id);
    }
  }
  render() {
    const { errors } = this.props;
    return (
      <Fragment>
        <Link
          to={"/add-edit-new-subject-Countent/" + this.props.match.params.id}
          className="btn btn-primary mr-3 mt-5"
        >
          add & Edit
        </Link>
        {this.props.subjectsCountent ? (
          <div className="card">
            <div className="card-header">
              {this.props.subjectsCountent.beschreibung}
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                {this.props.subjectsCountent.inhalten &&
                  this.props.subjectsCountent.inhalten.map(inhalt => (
                    <p key={inhalt._id}>
                      {inhalt.deutsch} | {inhalt.arabisch}
                    </p>
                  ))}
                {this.props.subjectsCountent.beispielen &&
                  this.props.subjectsCountent.beispielen.map(beispiel => (
                    <footer key={beispiel._id} className="blockquote-footer">
                      {beispiel.deutsch} |
                      <cite title="Source Title">{beispiel.arabisch}</cite>
                    </footer>
                  ))}
              </blockquote>
            </div>
          </div>
        ) : (
          <p>Please Add Subject Content</p>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  subjectsCountent: state.subjectsCountent.subjectsCountent
});
export default connect(
  mapStateToProps,
  actions
)(withRouter(subjectContent));
