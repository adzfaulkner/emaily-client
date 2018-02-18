import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import Payments from './Payments';
import Credits from './Credits';

class Header extends Component {
  renderContent() {
    if (this.props.auth === null) {
      return 'Still deciding';
    }

    return (
      <div>
        <Login /><Payments/><Credits /><Logout />
      </div>
    );

  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="brand-logo left"
          >
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);