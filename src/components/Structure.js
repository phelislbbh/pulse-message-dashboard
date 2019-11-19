import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

class Structure extends Component {
  renderMenu = () => {
    const {
      location: { pathname }
    } = this.props;

    if (pathname === "/login" || pathname === "/logout") {
      return <span />;
    }

    return (
      <div>
        <h2 className="ui header">Welcome to Pulse</h2>
        <div className="ui secondary pointing menu">
          <Link to="/" className={`${pathname === "/" ? "active" : ""} item`}>
            Dashboard
          </Link>
          <Link
            to="/profile"
            className={`${pathname === "/profile" ? "active" : ""} item`}
          >
            Profile
          </Link>
          <Link
            to="/logout"
            className={`${pathname === "/logout" ? "active" : ""} item`}
          >
            Logout
          </Link>
        </div>
      </div>
    );
  };

  render() {
    const {
      location: { pathname },
      user
    } = this.props;

    if (!user && (pathname !== "/login" || pathname === "/logout")) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        {this.renderMenu()}
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user.details.id || "" };
};

export default connect(
  mapStateToProps,
  {}
)(Structure);
