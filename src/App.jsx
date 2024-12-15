import React, { useState, useEffect, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'Nancy', profilePicture: 'src/portfolio_header.jpg' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, if needed
  }, []);

  const addTweet = (tweet, parentTweetId = null) => {
    const newTweet = {
      id: Date.now(),
      text: tweet,
      timestamp: new Date().toLocaleString(),
      user: { ...user },
      replies: [],
      retweets: 0,
    };

    if (parentTweetId) {
      setTweets(
        tweets.map((tweet) =>
          tweet.id === parentTweetId
            ? { ...tweet, replies: [newTweet, ...tweet.replies] }
            : tweet
        )
      );
    } else {
      setTweets([newTweet, ...tweets]);
    }
  };

  const addRetweet = (tweetId) => {
    setTweets(
      tweets.map((tweet) =>
        tweet.id === tweetId
          ? { ...tweet, retweets: tweet.retweets + 1 }
          : tweet
      )
    );
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        <Header />
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} addRetweet={addRetweet} addTweet={addTweet} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;
