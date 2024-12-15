import React, { useState } from 'react';
import ReplyModal from './ReplyModal';
import './TweetList.css';

const TweetList = ({ tweets, addRetweet, addTweet }) => {
  const [replyTo, setReplyTo] = useState(null);

  const handleReply = (tweet) => {
    setReplyTo(tweet);
  };

  const closeReplyModal = () => {
    setReplyTo(null);
  };

  return (
    <div className="tweet-list">
      {tweets.length === 0 ? (
        <p>No tweets yet. Start tweeting!</p>
      ) : (
        tweets.map((tweet) => (
          <div key={tweet.id} className="tweet">
            <div className="tweet-content">
              <p><strong>{tweet.user.name}</strong>: {tweet.text}</p>
              <span className="timestamp">{tweet.timestamp}</span>
            </div>
            <div className="tweet-actions">
              <button onClick={() => addRetweet(tweet.id)}>Retweet ({tweet.retweets})</button>
              <button onClick={() => handleReply(tweet)}>Reply</button>
            </div>
            {tweet.replies.length > 0 && (
              <div className="tweet-replies">
                {tweet.replies.map((reply) => (
                  <div key={reply.id} className="tweet">
                    <p><strong>{reply.user.name}</strong>: {reply.text}</p>
                    <span className="timestamp">{reply.timestamp}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))
      )}
      {replyTo && (
        <ReplyModal
          tweet={replyTo}
          closeReplyModal={closeReplyModal}
          addTweet={addTweet}
        />
      )}
    </div>
  );
};

export default TweetList;
