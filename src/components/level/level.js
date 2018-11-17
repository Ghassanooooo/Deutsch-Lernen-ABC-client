import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import { Link } from "react-router-dom";

class Level extends Component {
  componentDidMount() {
    this.props.getLevels();
  }
  render() {
    const { errors } = this.props;
    return (
      <Fragment>
        <Link to={"/level/add-level"} className="btn btn-primary">
          Add New Level
        </Link>
        {this.props.levels &&
          this.props.levels.map(items => (
            <div
              key={items._id}
              className="card text-center"
              style={{ marginBottom: "10px" }}
            >
              <div className="card-header">
                {items.titeldeutsch} | {items.titelarabisch}
              </div>
              <div className="card-body">
                <p className="card-text">{items.beschreibungdeutsch}</p>
                <p className="card-text">{items.beschreibungarabisch}</p>
                <Link to={"/subject/" + items._id} className="btn btn-primary">
                  Go to the class
                </Link>
              </div>
            </div>
          ))}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  levels: state.levels.levels
});
export default connect(
  mapStateToProps,
  actions
)(Level);
