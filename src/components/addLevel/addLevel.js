import React, { Component, Fragment } from "react";
import InputFild from "../common/input/input";

class AddLevel extends Component {
  render() {
    return (
      <Fragment>
        <h3>Add New Level</h3>
        <form>
          <InputFild label="Arabic Title" placeholder="Add Title in Arabic" />
          <InputFild label="German Title" placeholder="Add Title in German" />
          <InputFild
            label="Arabic Discription"
            placeholder="Add Discription in Arabic"
          />
          <InputFild
            label="German Discription"
            placeholder="Add Discription in German"
          />
          <button type="submit" className="btn btn-primary">
            ADD NEW LEVEL
          </button>
        </form>
      </Fragment>
    );
  }
}

export default AddLevel;
