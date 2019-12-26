import React, { useState, useEffect } from 'react';
import {
  useParams
} from "react-router-dom";
import './Chat.css';

import io from 'socket.io-client';
var socket = io.connect('http://localhost:5000');

function Chat() {
  const [chatLog, setChatLog] = useState([]);
  const [chatText, setChatTest] = useState('');
  let { id } = useParams();
  
  useEffect(() => {
    socket.on('message_client',(data) => {
      setChatLog(data);
    });
  });

  function handleSend() {
    socket.emit('message_server', {message:chatText, user:id});
    setChatTest('');
  }

  return (
    <div className="Chat">
        {chatLog.map((msg)=><div key={msg.id}> {`${msg.from} : ${msg.message}`}</div>)}
        <div className="chat-menu">
          <input className="chat-input" type="text" value={chatText} onChange={ (e) => {setChatTest(e.target.value)} }/>
          <input
            className="chat-box"
            type="button"
            value="Send"
            onClick={handleSend}
          />
        </div>
    </div>
  );
}

export default Chat;