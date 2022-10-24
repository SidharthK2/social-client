import "./chatOnline.css";

const ChatOnline = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatOnline">
      <div className="chatOnlinefriend">
        <div className="chatOnlineImgContainer">
          <img src={PF + "/person/1.jpg"} alt="" className="chatOnlineImg" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Jane Doe</span>
      </div>
    </div>
  );
};

export default ChatOnline;
