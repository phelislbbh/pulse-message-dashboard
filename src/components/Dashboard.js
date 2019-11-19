import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMessages } from "../actions";

import Structure from "./Structure";
import MessageList from "./messages/MessageList";
import MessageDetail from "./messages/MessageDetail";

import "./style.css";

import Loader from "./Loader";

class Dashboard extends Component {
  componentDidMount() {
    const {
      fetchMessages,
      user: {
        details: { id }
      },
      messages: { data }
    } = this.props;

    fetchMessages(id);
  }

  render() {
    const {
      messages: { isFetchingMessages }
    } = this.props;

    return (
      <Structure location={this.props.location}>
        <div className="ui container">
          <h2 style={{ marginTop: "10px" }}>Dashboard</h2>
          {isFetchingMessages ? (
            <Loader />
          ) : (
            <div className="ui grid segment ">
              <div className="five wide column">
                <MessageList />
              </div>
              <div className="eleven wide column">
                <MessageDetail />
              </div>
            </div>
          )}
        </div>
      </Structure>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(
  mapStateToProps,
  { fetchMessages }
)(Dashboard);
