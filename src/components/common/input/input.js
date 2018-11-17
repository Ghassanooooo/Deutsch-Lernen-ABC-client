import React, { Component } from "react";

class InputFild extends Component {
  render() {
    let errors = null;
    if (this.props.errors) {
      errors = this.props.errors.find(o => o.param === this.props.name);
    }
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input
          value={this.props.value}
          name={this.props.name}
          onChange={this.props.onChange}
          type={this.props.type || "text"}
          className={(errors && "is-invalid form-control") || "form-control"}
          placeholder={this.props.placeholder}
        />
        {errors && <div className="invalid-feedback">{errors.msg}</div>}
      </div>
    );
  }
}

export default InputFild;
