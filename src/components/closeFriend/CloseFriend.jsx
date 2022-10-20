import axios from "axios";
import { useEffect, useState } from "react";
import "./closeFriend.css";

export default function CloseFriend({ uid }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  console.log(uid);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`users/?userId=${uid}`);
        console.log("in cf effcts");
        console.log(uid);
        console.log(res);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [uid]);

  return (
    <li className="sidebarFriend">
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
    </li>
  );
}
