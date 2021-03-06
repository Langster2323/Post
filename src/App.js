import React, { Component } from 'react';
import './App.css';
import Posts from './Posts';
import Post from './Post';
import { Route } from 'react-router-dom';

/*Aware of the app as a whole...
Initializes and updates the state with response data...
Provides data and behavior of its child components...
Data fetching logic should be within the container... */
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
