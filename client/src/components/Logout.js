import React, { Component}  from 'react';
import { connect } from 'react-redux';

class Logout extends Component {
  render() {
    if(this.props.auth === false) {
      return '';
    }

    return (
      <li><a href="/api/logout">Logout</a></li>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Logout);