import "./conversations.css";

const Conversations = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div>
      <div className="conversations">
        <img src={PF + "/person/1.jpg"} alt="" className="conversationImg" />
        <span className="conversationName">Jane Doe</span>
      </div>
    </div>
  );
};

export default Conversations;
