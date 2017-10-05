import React, { Component } from 'react';
import {Link} from 'react-router-dom';

//Displays the template of each post... Presentational Component.
class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.match.params.id,
      data: {}
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.id )
    //.then is a promise... waits until it excutes grabbing the get data above.
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({data});
      })
  }

  render() {
    const data = this.state.data;
    return(
      <div>
        <Link to= '/'>Back to all posts</Link>
        <h1> {data.title} </h1>
        <p>This is posted by userid {data.userId}</p>
        {data.body}
      </div>
    )
  }
}

export default Post;
