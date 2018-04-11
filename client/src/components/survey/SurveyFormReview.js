import React, { Component}  from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import _ from 'lodash';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';

class SurveyFormReview extends Component {
  renderReviewFields(formFields, formValues) {
    return _.map(formFields, ({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  }

  render() {
    const { auth, onCancel, formValues, submitSurvey, history } = this.props;

    if(auth === false) {
      return '';
    }

    return (
      <div>
        <h5>Please confirm your entries</h5>
        {this.renderReviewFields(formFields, formValues)}
        <button
          className="yellow darken-3 btn-flat white-text"
          onClick={onCancel}
        >
          Back
        </button>
        <button
          onClick={() => submitSurvey(formValues, history)}
          className="green btn-flat right white-text"
        >
          Send Survey
          <i className="material-icons right">email</i>
        </button>
      </div>
    );
  }
}

function mapStateToProps({ auth, form }) {
  return {
    auth,
    formValues: form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));