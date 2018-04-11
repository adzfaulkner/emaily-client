import React, { Component}  from 'react';
import { connect } from 'react-redux';

class SurveyField extends Component {
  render() {
    if(this.props.auth === false) {
      return '';
    }

    const { input, label, meta: {error, touched} } = this.props;

    return (
      <div>
        <label>{label}</label>
        <input {... input} style={{ marginBottom: '5px' }}/>
        <div className="red-text" style={{ marginBottom: '20px' }}>{touched && error}</div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(SurveyField);
