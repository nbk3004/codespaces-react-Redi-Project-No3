import React, { useState } from 'react';
import './ReplyModal.css';

const ReplyModal = ({ tweet, closeReplyModal, addTweet }) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = () => {
    if (replyText.trim()) {
      addTweet(replyText, tweet.id);
      closeReplyModal();
    }
  };

  return (
    <div className="reply-modal">
      <div className="modal-content">
        <h3>Reply to: {tweet.text}</h3>
        <textarea
          placeholder="Write your reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div className="modal-actions">
          <button onClick={closeReplyModal}>Cancel</button>
          <button onClick={handleReply}>Reply</button>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
