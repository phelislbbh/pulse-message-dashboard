import React, { Component } from "react";
import { connect } from "react-redux";

import { logoutUser } from "../../actions";
import Structure from "../Structure";

class Logout extends Component {
  componentDidMount() {
    this.props.logoutUser();
  }
  render() {
    return (
      <Structure location={this.props.location}>
        <div />
      </Structure>
    );
  }
}

const mapStateToProps = state => {
  return { ...state.user };
};

export default connect(
  mapStateToProps,
  { logoutUser }
)(Logout);
