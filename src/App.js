import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import Post from './Post';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Posts} />
        <Route path='/posts/:id' component={Post} />
      </div>
    );
  }
}

export default App;
