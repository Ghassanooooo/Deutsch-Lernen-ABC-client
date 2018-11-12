import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/A1";

class ColectionsCard extends Component {
  render() {
    return (
      <div className="card text-center" style={{ marginBottom: "10px" }}>
        <div className="card-header">{data.a1.uberschrift}</div>
        <div className="card-body">
          <p className="card-text">{data.a1.beschreibung}</p>
          <Link to="/SubColections" className="btn btn-primary">
            Go to the class
          </Link>
        </div>
      </div>
    );
  }
}

export default ColectionsCard;
