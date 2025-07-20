import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './styles.css';

function App() {
  const [secretMessage, setSecretMessage] = useState('');

  return (
    <div className="container">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="title"
      >
        Steg0Master Tool
      </motion.h1>

      {/* Embedding Section */}
      <motion.div
        className="section"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2>🔐 Embed Hidden Text</h2>
        <input type="file" accept="image/*" className="input" />
        <textarea
          className="textarea"
          placeholder="Enter your secret message here..."
        ></textarea>
        <button className="btn">Embed</button>
      </motion.div>

      {/* Extraction Section */}
      <motion.div
        className="section"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2>🕵️ Extract Hidden Text</h2>
        <input type="file" accept="image/*" className="input" />
        <button className="btn" onClick={() => setSecretMessage('Hidden text extracted!')}>
          Extract
        </button>
        <div className="result">{secretMessage}</div>
      </motion.div>
    </div>
  );
}

export default App;
