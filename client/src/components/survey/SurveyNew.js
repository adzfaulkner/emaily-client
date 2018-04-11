import React, { Component}  from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import { reduxForm } from 'redux-form';

class SurveyNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview === true) {
      return <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />;
    }

    return <SurveyForm
      onSurveySubmit={() => this.setState({ showFormReview: true })}
    />;
  }

  render() {
    if(this.props.auth === false) {
      return '';
    }

    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

SurveyNew = connect(mapStateToProps)(SurveyNew);

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);