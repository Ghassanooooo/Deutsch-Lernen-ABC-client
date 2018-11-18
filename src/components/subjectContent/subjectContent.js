import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class subjectContent extends Component {
  componentDidMount() {
    if (this.props.match.params.id) {
      this.props.getSubjectsContent(this.props.match.params.id);
    }
  }
  render() {
    const { errors } = this.props;
    return (
      this.props.subjectsCountent && (
        <div className="card">
          <div className="card-header">
            {this.props.subjectsCountent.beschreibung}
          </div>
          <div className="card-body">
            <blockquote className="blockquote mb-0">
              {this.props.subjectsCountent.inhalten &&
                this.props.subjectsCountent.inhalten.map(inhalt => (
                  <p key={inhalt._id}>
                    {inhalt.deutsch} | {inhalt.arabisch}
                  </p>
                ))}
              {this.props.subjectsCountent.beispielen &&
                this.props.subjectsCountent.beispielen.map(beispiel => (
                  <footer key={beispiel._id} className="blockquote-footer">
                    {beispiel.deutsch} |
                    <cite title="Source Title">{beispiel.arabisch}</cite>
                  </footer>
                ))}
            </blockquote>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  subjectsCountent: state.subjectsCountent.subjectsCountent
});
export default connect(
  mapStateToProps,
  actions
)(withRouter(subjectContent));
