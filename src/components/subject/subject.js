import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import data from "../data/A1";

class Subject extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSubjects(this.props.match.params.id);
    }
  }
  render() {
    // const { errors } = this.props;
    return (
      <Fragment>
        {/* <Link to="/add-new-subject" className="btn btn-primary mr-3 mt-5">
          add
        </Link>
        <Link to="/edit-subject" className="btn btn-warning mt-5">
          edit
        </Link>
        <div className="card mt-5">
          <ul className="list-group list-group-flush">
            {data.map(SubColection =>
              SubColection.id === this.props.match.params.id
                ? SubColection.kursinhalte.map(sub => (
                    <li key={sub.id} className="list-group-item">
                      <Link to={`/SubColections/SubColectionContent/${sub.id}`}>
                        {sub.titel}
                      </Link>
                    </li>
                  ))
                : null
            )}
          </ul>
        </div> */}
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
)(withRouter(Subject));
