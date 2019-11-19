import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { changeUserProperty, requestOTP, loginUser } from "../../actions";
import Structure from "../Structure";

class Login extends Component {
  state = {
    otp: "",
    error: false,
    success: false
  };

  onPhoneChange = event => {
    this.props.changeUserProperty("phone", event.target.value);
  };

  onOTPChange = event => {
    this.setState({ otp: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();

    const {
      state: { otp },
      props: { requestOTP, phone, details }
    } = this;

    this.setState({ error: false, success: false });

    if (details.id) {
      if (parseInt(otp) === parseInt(details.otp)) {
        this.setState({ otp: "", success: true });
      } else {
        this.setState({ otp: "", error: true });
      }
    } else {
      requestOTP(phone);
    }
  };

  renderSuccess = () => {
    const { success } = this.state;

    if (success) {
      return (
        <div className="ui green message">
          <p>Login successful</p>
        </div>
      );
    }

    return <span />;
  };

  renderError = () => {
    const { error } = this.state;

    if (error) {
      return (
        <div className="ui red message">
          <p>Incorrect OTP provided.</p>
        </div>
      );
    }

    return <span />;
  };

  renderAvatar = () => {
    const { details } = this.props;

    if (details.avatar) {
      const { avatar } = details;

      return (
        <div className="avatar-container minus-margin">
          <img className="ui tiny circular image" src={avatar} alt="" />
        </div>
      );
    }

    return (
      <div className="avatar-container">
        <img
          className="ui tiny circular image"
          src="/assets/default-avatar.png"
          alt=""
        />
      </div>
    );
  };

  renderName = () => {
    const { details } = this.props;

    if (details.first_name) {
      const { first_name, last_name } = this.props.details;

      return <h5>{`${first_name} ${last_name}`}</h5>;
    }

    return <span />;
  };

  renderPhoneField = () => {
    const { phone, details } = this.props;

    if (details.id) {
      return <span />;
    }

    return (
      <div className="field">
        <input
          type="number"
          name="phone"
          value={phone}
          onChange={this.onPhoneChange}
          placeholder="Phone number"
        />
      </div>
    );
  };

  renderOTPField = () => {
    const {
      state: { otp },
      props: { details }
    } = this;

    if (details.id) {
      return (
        <div className="field">
          <input
            type="number"
            name="otp"
            value={otp}
            onChange={this.onOTPChange}
            placeholder="OTP"
          />
        </div>
      );
    }

    return <span />;
  };

  renderButton = () => {
    const { requestingOTP, details } = this.props;

    return (
      <div className="field">
        <button
          className={`${
            requestingOTP ? "loading" : ""
          } fluid ui primary button`}
        >
          {details.id ? "Validate OTP" : "Request OTP"}
        </button>
      </div>
    );
  };

  render() {
    const { success } = this.state;

    if (success) {
      return <Redirect to="/" />;
    }

    return (
      <Structure location={this.props.location}>
        <div className="ui container">
          <div className="login">
            <div>
              <div className="form-container">
                <form
                  method="post"
                  onSubmit={this.onSubmit}
                  className="ui fluid form"
                >
                  {this.renderAvatar()}
                  {this.renderName()}
                  {this.renderSuccess()}
                  {this.renderError()}
                  {this.renderPhoneField()}
                  {this.renderOTPField()}
                  {this.renderButton()}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Structure>
    );
  }
}

const mapStateToProps = state => {
  return state.user;
};

export default connect(
  mapStateToProps,
  { changeUserProperty, requestOTP, loginUser }
)(Login);
