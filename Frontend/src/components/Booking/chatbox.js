// frontend/src/components/Booking/Chatbox.js

import React from 'react';
import { MessageBox, ChatList } from 'react-chat-elements';

function Chatbox() {
  // Dummy messages for demonstration
  const messages = [
    { position: 'left', type: 'text', text: 'Hello, how can I help you?' },
    { position: 'right', type: 'text', text: 'I have a question about my booking.' },
  ];

  return (
    <div className="chatbox-container">
      <ChatList className="chat-list" dataSource={messages} />
      <MessageBox
        className="message-box"
        position={'bottom'}
        type={'text'}
        text={'Type your message...'}
      />
    </div>
  );
}

export default Chatbox;
