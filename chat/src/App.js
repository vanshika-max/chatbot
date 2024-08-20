



// import React, { useState } from 'react';

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');

//   const handleSend = async () => {
//     const response = await fetch('http://localhost:5000/chat', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ message: userInput }),
//     });

//     const data = await response.json();
//     setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: data.response }]);
//     setUserInput('');
//   };

//   return (
//     <div style={styles.chatContainer}>
//       <div style={styles.chatBox}>
//         {messages.map((msg, index) => (
//           <div key={index} style={styles.messageContainer}>
//             <div style={styles.profileImage} />
//             <div style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
//               {msg.text}
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={styles.inputContainer}>
//         <input
//           type="text"
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           style={styles.input}
//         />
//         <button onClick={handleSend} style={styles.sendButton}>Send</button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   chatContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     height: '90vh',
//     width: '400px',
//     margin: '20px auto',
//     border: '1px solid #ddd',
//     borderRadius: '10px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     backgroundColor: '#f9f9f9',
//   },
//   chatBox: {
//     flex: 1,
//     padding: '10px',
//     overflowY: 'auto',
//     borderBottom: '1px solid #ddd',
//   },
//   messageContainer: {
//     display: 'flex',
//     alignItems: 'flex-start',
//     margin: '5px 0',
//     maxWidth: '70%',
//     wordWrap: 'break-word',
//   },
//   userMessage: {
//     backgroundColor: '#4CAF50',
//     color: 'white',
//     padding: '10px',
//     borderRadius: '15px 15px 0 15px',
//     textAlign: 'right',
//     flex: 1,
//   },
//   botMessage: {
//     backgroundColor: '#e0e0e0',
//     color: '#333',
//     padding: '10px',
//     borderRadius: '15px 15px 15px 0',
//     textAlign: 'left',
//     flex: 1,
//   },
//   profileImage: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     marginRight: '10px',
//     backgroundSize:'cover'
//   },
//   inputContainer: {
//     display: 'flex',
//     padding: '10px',
//     borderTop: '1px solid #ddd',
//     backgroundColor: '#fff',
//   },
//   input: {
//     flex: 1,
//     padding: '10px',
//     border: '1px solid #ccc',
//     borderRadius: '5px',
//     marginRight: '10px',
//     fontSize: '16px',
//   },
//   sendButton: {
//     padding: '10px 15px',
//     backgroundColor: '#007BFF',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//     fontSize: '16px',
//   },
// };

// export default App;


import React, { useState } from 'react';
// Import your profile images
import userProfileImage from './user.png';
import botProfileImage from './BOT.png';

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const handleSend = async () => {
    const response = await fetch('http://localhost:5000/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: userInput }),
    });

    const data = await response.json();
    setMessages([...messages, { sender: 'user', text: userInput }, { sender: 'bot', text: data.response }]);
    setUserInput('');
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.chatBox}>
        {messages.map((msg, index) => (
          <div key={index} style={styles.messageContainer}>
            <div
              style={{
                ...styles.profileImage,
                ...(msg.sender === 'user' ? { backgroundImage: `url(${userProfileImage})` } : { backgroundImage: `url(${botProfileImage})` }),
              }}
            />
            <div style={msg.sender === 'user' ? styles.userMessage : styles.botMessage}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '90vh',
    width: '400px',
    margin: '20px auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  },
  chatBox: {
    flex: 1,
    padding: '10px',
    overflowY: 'auto',
    borderBottom: '1px solid #ddd',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '5px 0',
    maxWidth: '70%',
    wordWrap: 'break-word',
  },
  userMessage: {
    backgroundColor: 'grey',
    color: 'black',
    padding: '10px',
    borderRadius: '15px 15px 0 15px',
    textAlign: 'right',
    flex: 1,
  },
  botMessage: {
    backgroundColor: 'green',
    color: 'black',
    padding: '10px',
    borderRadius: '15px 15px 15px 0',
    textAlign: 'left',
    flex: 1,
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px',
    backgroundSize: 'cover',
  },
  inputContainer: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ddd',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px',
    fontSize: '16px',
  },
  sendButton: {
    padding: '10px 15px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default App;

