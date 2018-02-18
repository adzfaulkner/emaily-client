import React, { Component}  from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    if(this.props.auth !== false) {
      return '';
    }

    return (
      <li><a href="/auth/google">Login With Google</a></li>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Login);