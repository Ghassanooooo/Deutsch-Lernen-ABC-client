import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";
import data from "../data/A1";

class Level extends Component {
  componentDidMount() {
    this.props.currentUser();
  }
  render() {
    return (
      <Fragment>
        <Link to={"/level/add-level"} className="btn btn-primary">
          Add New Level
        </Link>
        {data.map(items => (
          <div
            key={items.id}
            className="card text-center"
            style={{ marginBottom: "10px" }}
          >
            <div className="card-header">{items.uberschrift}</div>
            <div className="card-body">
              <p className="card-text">{items.beschreibung}</p>
              <Link
                to={"/SubColections/" + items.id}
                className="btn btn-primary"
              >
                Go to the class
              </Link>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}
export default connect(
  null,
  actions
)(Level);
