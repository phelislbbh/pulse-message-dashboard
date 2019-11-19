import React, { Component } from "react";
import MessageItem from "./MessageItem";

import { connect } from "react-redux";

import { fetchMessageDetails } from "../../actions";

class MessageList extends Component {
  onMessageClick = messageId => {
    const { userId, fetchMessageDetails } = this.props;

    fetchMessageDetails(userId, messageId);
  };

  renderItem = message => {
    const { id } = message;

    return (
      <MessageItem
        key={id}
        message={message}
        onClick={this.onMessageClick.bind(null, id)}
      />
    );
  };

  componentDidMount = () => {
    const {
      messages: { selectedMessage, data }
    } = this.props;

    if (!selectedMessage && data.length > 0) {
      this.onMessageClick(data[0].id);
    }
  };

  render() {
    const { data } = this.props.messages;

    return (
      <div className="ui middle relaxed divided list">
        {data.map(message => this.renderItem(message))}
      </div>
    );
  }
}

const mapStateToProps = ({ user, messages }) => {
  return { userId: user.details.id, messages };
};

export default connect(
  mapStateToProps,
  { fetchMessageDetails }
)(MessageList);
