import "./sidebar.css";
import { RssFeed, Chat } from "@material-ui/icons";
import CloseFriend from "../closeFriend/CloseFriend";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { user } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
          </Link>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {user.following.map((uid) => (
            <CloseFriend key={uid} uid={uid} />
          ))}
        </ul>
      </div>
    </div>
  );
}
