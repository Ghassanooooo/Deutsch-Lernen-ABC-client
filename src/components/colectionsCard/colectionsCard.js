import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/A1";

class ColectionsCard extends Component {
  render() {
    return data.map(items => (
      <div className="card text-center" style={{ marginBottom: "10px" }}>
        <div className="card-header">{items.uberschrift}</div>
        <div className="card-body">
          <p className="card-text">{items.beschreibung}</p>
          <Link to={"/SubColections/" + items.id} className="btn btn-primary">
            Go to the class
          </Link>
        </div>
      </div>
    ));
  }
}

export default ColectionsCard;
