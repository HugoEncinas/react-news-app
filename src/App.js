import React from 'react';
import './App.sass';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NewsFeed from './components/NewsFeed';

function App() {
  return (
    <Router basename="/react-news-app">
      <div className="app">
        <Switch>
          <Route exact path="/" component={NewsFeed} />
          <Route path="/newsfeed" component={NewsFeed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
