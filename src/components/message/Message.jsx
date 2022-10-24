import "./message.css";
import { format } from "timeago.js";

const Message = ({ message, own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        {!own && (
          <img className="messageImg" src={PF + "/person/1.jpg"} alt="" />
        )}
        <p className="messageText">{message.text}</p>
        {own && (
          <img className="messageImg" src={PF + "/person/1.jpg"} alt="" />
        )}
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
};

export default Message;
