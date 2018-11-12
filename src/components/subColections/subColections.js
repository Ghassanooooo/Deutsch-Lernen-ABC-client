import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import data from "../data/A1";

class SubColections extends Component {
  render() {
    return (
      <Fragment>
        <Link to="/add-new-subject" class="btn btn-primary mr-3 mt-5">
          add
        </Link>
        <Link to="/edit-subject" class="btn btn-warning mt-5">
          edit
        </Link>
        <div className="card mt-5">
          <ul className="list-group list-group-flush">
            {data.map(SubColection =>
              SubColection.id === this.props.match.params.id
                ? SubColection.kursinhalte.map(sub => (
                    <li className="list-group-item">
                      <Link to={`/SubColections/SubColectionContent/${sub.id}`}>
                        {sub.titel}
                      </Link>
                    </li>
                  ))
                : null
            )}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(SubColections);
