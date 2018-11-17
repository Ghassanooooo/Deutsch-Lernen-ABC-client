import React, { Component, Fragment } from "react";

class EditSubject extends Component {
  render() {
    return (
      <Fragment>
        <h3>Edit a exist object</h3>
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Object Title</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Edit the title"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">the object in German</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Edit the object in german"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">the object in Arabic</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Edit the object in Arabic"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Description in Arabic</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Edit Description in Arabic"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            EDIT
          </button>
        </form>
      </Fragment>
    );
  }
}

export default EditSubject;
