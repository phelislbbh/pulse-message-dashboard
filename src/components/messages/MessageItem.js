import React, { PureComponent } from "react";

class MessageItem extends PureComponent {
  render = () => {
    const {
      message: {
        photo,
        title,
        excerpt: { type, date, contents }
      },
      onClick
    } = this.props;

    return (
      <div onClick={onClick} className="item">
        <img
          className="ui avatar image"
          src={photo || "/assets/default-avatar.png"}
          alt=""
        />
        <div className="content">
          <p className="header">{title}</p>
          <div className="description">{`${date}: ${
            type === 1 ? contents : "Image"
          }`}</div>
        </div>
      </div>
    );
  };
}

export default MessageItem;
