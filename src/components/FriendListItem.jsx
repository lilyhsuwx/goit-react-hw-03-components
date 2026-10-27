import { Component } from "react";

class FriendListItem extends Component {
  render() {
    const { avatar, name, isOnline } = this.props;
    return (
      <>
        <li className="item">
          <span className="status">{isOnline ? "onlone": "offline"}</span>
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
          <p className="name">{name}</p>
        </li>
      </>
    );
  }
}

export default FriendListItem;
