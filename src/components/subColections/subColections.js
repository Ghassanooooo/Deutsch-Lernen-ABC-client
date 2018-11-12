import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import data from "../data/A1";

class SubColections extends Component {
  render() {
    return (
      <div className="card">
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
    );
  }
}

export default withRouter(SubColections);
