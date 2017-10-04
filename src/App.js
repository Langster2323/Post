import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount () {
    axios.get(https://jsonplaceholder.typicode.com/posts)
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
