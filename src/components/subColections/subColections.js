import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/A1";

class SubColections extends Component {
  render() {
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {data.a1.kursinhalte.map(item => (
            <li className="list-group-item">
              <Link to={`/SubColections/SubColectionContent/${item.id}`}>
                {item.titel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SubColections;
