import axios from "axios";
import { useEffect, useState } from "react";
import "./conversations.css";

const Conversations = ({ conversation, currentUser }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("/users?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  // console.log(user);
  // console.log(conversation);

  return (
    <div>
      <div className="conversations">
        <img
          src={
            user?.profilePicture
              ? PF + user?.profilePicture
              : PF + "/person/stockDp.jpg"
          }
          alt=""
          className="conversationImg"
        />
        <span className="conversationName">{user?.username}</span>
      </div>
    </div>
  );
};

export default Conversations;
