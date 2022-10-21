import "./message.css";

const Message = ({ own }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        {!own && (
          <img className="messageImg" src={PF + "/person/1.jpg"} alt="" />
        )}
        <p className="messageText">this is a message</p>
        {own && (
          <img className="messageImg" src={PF + "/person/1.jpg"} alt="" />
        )}
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  );
};

export default Message;
