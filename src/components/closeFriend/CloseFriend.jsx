import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./closeFriend.css";

export default function CloseFriend({ uid }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  console.log(uid);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`/users/?userId=${uid}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [uid]);

  return (
    <li className="sidebarFriend">
      <Link
        to={"/profile/" + user.username}
        style={{ textDecoration: "none", color: "#fff78e" }}>
        <img
          className="sidebarFriendImg"
          src={
            user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/stockDp.jpg"
          }
          alt=""
        />
        <span className="sidebarFriendName">{user.username}</span>
      </Link>
    </li>
  );
}
