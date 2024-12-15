import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import Login from './Login';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [user, setUser] = useState(null); // User state starts as null
  const [tweets, setTweets] = useState([]);
  const [theme, setTheme] = useState('light');

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
    <Router>
      <AppContext.Provider value={{ user, setUser, theme, setTheme }}>
        <div className={`app ${theme}`}>
          <Header />
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                user ? (
                  <>
                    <main>
                      <Profile />
                      <TweetInput addTweet={addTweet} />
                      <TweetList tweets={tweets} addRetweet={addRetweet} addTweet={addTweet} />
                    </main>
                  </>
                ) : (
                  <Login setUser={setUser} />
                )
              }
            />
          </Routes>
        </div>
      </AppContext.Provider>
    </Router>
  );
};

export default App;
