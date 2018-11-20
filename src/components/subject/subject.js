import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Spinner from "../common/spinner/spinner";

class Subject extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSubjects(this.props.match.params.id);
    }
  }
  render() {
    const { errors } = this.props;
    return (
      <Fragment>
        <Link
          to={"/add-new-subject/" + this.props.match.params.id}
          className="btn btn-primary mr-3 mt-5"
        >
          add
        </Link>

        {this.props.subjects.length > 0 ? this.props.loading ?<Spinner />: (
          <div className="card mt-5">
            <ul className="list-group list-group-flush">
              {this.props.subjects.map(subject => (
                <li key={subject._id} className="list-group-item">
                  <Link to={`/subject/subject-content/${subject._id}`}>
                    {subject.titeldeutsch} || {subject.titelarabisch}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ):<p> Please Add Some Subjects!</p>}
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.errors,
  subjects: state.subjects.subjects,
  loading: state.subjects.loading
});
export default connect(
  mapStateToProps,
  actions
)(withRouter(Subject));
