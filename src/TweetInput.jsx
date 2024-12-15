import React, { useState } from 'react';
import './TweetInput.css';

const TweetInput = ({ addTweet }) => {
  const [text, setText] = useState('');

  const handleTweet = () => {
    if (text.trim()) {
      addTweet(text);
      setText('');
    }
  };

  return (
    <div className="tweet-input">
      <textarea
        placeholder="What's happening?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleTweet}>Tweet</button>
    </div>
  );
};

export default TweetInput;
