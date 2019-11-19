import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchMessageDetails } from "../../actions";

class MessageDetail extends Component {
  renderItem = data => {
    const {
      createdAt,
      text,
      _id,
      image,
      type,
      user: { avatar, name }
    } = data;

    return (
      <div className="comment" key={_id}>
        <div className="avatar">
          <img
            className="ui avatar image"
            src={avatar || "/assets/default-avatar.png"}
            alt=""
          />
        </div>
        <div className="content">
          <p className="author">{name}</p>
          <div className="metadata">
            <div className="date">{createdAt}</div>
          </div>
          {type === "text" ? (
            <div className="text">{text}</div>
          ) : (
            <img src={image} className="image-in-conversation" alt="" />
          )}
        </div>
      </div>
    );
  };

  renderConversation = () => {
    const { chats } = this.props;

    return (
      <div className="ui comments">
        {chats.map(chat => this.renderItem(chat))}
      </div>
    );
  };

  renderForm = () => {
    return (
      <form className="ui reply form">
        <div className="field">
          <textarea />
        </div>
        <div className="ui primary submit labeled icon button">
          <i className="icon edit" /> Reply
        </div>
      </form>
    );
  };

  render = () => {
    return (
      <div>
        {this.renderConversation()}
        {this.renderForm()}
      </div>
    );
  };
}

const mapStateToProps = ({ user, messages }) => {
  const { selectedMessage, chats, isFetchingChats } = messages;

  return {
    messageId: selectedMessage,
    chats,
    isFetchingChats,
    userId: user.details.id
  };
};

export default connect(
  mapStateToProps,
  { fetchMessageDetails }
)(MessageDetail);
