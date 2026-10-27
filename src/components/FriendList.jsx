import { Component } from "react";
import FriendListItem from "./FriendListItem";

class FriendList extends Component {
  render() {
    const { friends } = this.props;
    return (
      <>
        <ul className="friend-list">
          {friends.map(({ avatar, name, isOnline, id }) => {
            return (
              <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default FriendList;
