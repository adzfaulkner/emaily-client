import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SurveyList from './survey/SurveyList';

class Dashboard extends Component {
  render() {
    if (this.props.auth === null) {
      return '';
    }

    return (
      <div>
        <SurveyList/>
        <div className="fixed-action-btn">
          <Link to="/surveys/new" className="btn-floating btn-large red">
            <i className="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
