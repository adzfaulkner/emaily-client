import React, { Component}  from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Credits extends Component {
  render() {
    if(this.props.auth === false) {
      return '';
    }

    return (
      <li style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, actions)(Credits);