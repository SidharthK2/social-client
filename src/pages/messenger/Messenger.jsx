import Conversations from "../../components/conversations/Conversations";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import "./messenger.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export default function Messenger() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useContext(AuthContext);
  const [currentChat, setCurrentChat] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user?._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  console.log(messages);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="  Search friends"
              className="chatMenuInput"
            />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversations conversation={c} currentUser={user} />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((m) => (
                    <Message message={m} own={m.sender === user._id} />
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    placeholder="write here..."
                    className="chatMessageInput"></textarea>
                  <button className="chatSubmitButton">Send</button>
                </div>
              </>
            ) : (
              <span className="noconversationText">Start chatting...</span>
            )}
          </div>
        </div>

        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
