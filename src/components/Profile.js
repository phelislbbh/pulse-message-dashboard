import React, { Component } from "react";

import Structure from "./Structure";

class Profile extends Component {
  render() {
    return (
      <Structure location={this.props.location}>
        <div>
          <h2>Profile</h2>
        </div>
      </Structure>
    );
  }
}

export default Profile;
