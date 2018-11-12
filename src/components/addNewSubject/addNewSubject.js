import React, { Component, Fragment } from "react";

class AddNewSubject extends Component {
  render() {
    return (
      <Fragment>
        <h3>Add a new object</h3>
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Object Title</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Add the title"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">the object in German</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Add the object in german"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">the object in Arabic</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Add the object in Arabic"
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Description in Arabic</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Add Description in Arabic"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            ADD
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AddNewSubject;
