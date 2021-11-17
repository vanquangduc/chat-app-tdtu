import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => ( 
  <form className="chatbox-input">
      <input
      className="input"
      type="text" placeholder="Type a message..."
      value={message}
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => e.key === 'Enter' ? sendMessage(e) : null}
      />
      <button className="sendButton" type="submit" onClick={ e => sendMessage(e)}>send</button>
      
  </form>
)

export default Input;