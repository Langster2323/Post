import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Host the number of Posts...
class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
    //.then is a promise... waits until it excutes grabbing the get data above.
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({data});
      })
      .catch(error => {
          console.log('Error fetching and parsing data', error)
      });
  }

  render () {
    console.log(this.state.data);
    return (
      <div>
        <h1>Presents</h1>
        <ul>{this.state.data.map( item => (
          <li className="panel" key={item.id}>
            <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
      ))}
        </ul>
      </div>
 )}
}

export default Posts;
