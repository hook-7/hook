import React, { useState, useEffect, useRef } from 'react';
import './index.less'

const { WebSocket } = window;

const App: React.FC = () => {

  return (
    <div className='room'>
      <Addresses />
      <ChatBox />
    </div>
  );
};

function Addresses() {
  const [addresses, setAddresses] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAddresses() {
      const response = await fetch('/getTCPConns');
      const data = await response.json();
      setAddresses(data.addresses);
    }
    fetchAddresses();
  }, []);

  return (
    <div>
      <h1>Addresses:</h1>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>{address}</li>
        ))}
      </ul>
    </div>
  );
}

const ChatBox: React.FC = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    // let ws = new WebSocket('ws://' + location.host + '/ws');
    let ws = new WebSocket('ws://120.77.79.24:38081/ws');
    setSocket(ws);

    const handleOpen = () => {
      console.log('WebSocket connection opened');
    };

    const handleMessage = (event: MessageEvent) => {
      const message = JSON.parse(event.data);
      if (message) {
        setMessages(message);
      }
    };

    const handleClose = (event: CloseEvent) => {
      console.log('WebSocket connection closed');
      setSocket(null);
      // Attempt to reconnect
      setTimeout(() => {
        ws = new WebSocket('ws://' + location.host + '/ws');
        setSocket(ws);
        ws.onopen = handleOpen;
        ws.onmessage = handleMessage;
        ws.onclose = handleClose;
      }, 1000);
    };

    ws.onopen = handleOpen;
    ws.onmessage = handleMessage;
    ws.onclose = handleClose;

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, []);

  const sendMessage = (text: string) => {
    if (socket) {
      socket.send(text);
    }
  };

  return (
    <div>
      <h1>Chat Room</h1>
      <MessageList messages={messages} />
      <InputBox onSend={sendMessage} />
    </div>
  );
};

interface MessageListProps {
  messages: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const messagesEndRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <ul id="wsBox" >
      {messages.map((message, i) => (
        <li key={i}>{message}</li>
      ))}
      <li ref={messagesEndRef} />
    </ul>
  );
};

interface InputBoxProps {
  onSend: (text: string) => void;
}

const InputBox: React.FC<InputBoxProps> = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} />
      <button type="submit">Send</button>
    </form>
  );
};

export default App;
