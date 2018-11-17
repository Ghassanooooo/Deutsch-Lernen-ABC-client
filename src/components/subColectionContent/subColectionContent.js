import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import data from "../data/A1";

class SubColectionContent extends Component {
  render() {
    return data.map(colection =>
      colection.kursinhalte
        .filter(FF => FF.id === this.props.match.params.id)
        .map(item => (
          <div key={item.id} className="card">
            <div className="card-header">{item.titel}</div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                {item.inhalten.map(inhalt => (
                  <p key={inhalt.deutsch}>
                    {inhalt.deutsch} | {inhalt.arabisch} --{" "}
                    {inhalt.beschreibung}
                  </p>
                ))}

                {item.beispielen.map(beispiele => (
                  <footer key={beispiele.deutsch} className="blockquote-footer">
                    {beispiele.deutsch} |
                    <cite title="Source Title">{beispiele.arabisch}</cite>
                  </footer>
                ))}
              </blockquote>
            </div>
          </div>
        ))
    );
  }
}

export default withRouter(SubColectionContent);
