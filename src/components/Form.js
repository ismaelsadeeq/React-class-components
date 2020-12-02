import React, { Component } from 'react'

class form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       username:'',
       comment:'',
       topic:"React"
    }
    
  }
  handleUsernameChange = (event) =>{
    this.setState({
      username:event.target.value
    });
  };
  handleCommentChange = (event) =>{
    this.setState({
      comment:event.target.value
    });
  };
  handleTopicChange = (event) =>{
    this.setState({
      topic:event.target.value
    });
  }
  handleSubmit = (event)=>{
    event.preventDefault();
    alert(`${this.state.username} you  submitted a topic on ${this.state.topic}`);
  }
  render() {
    const {username, comment , topic} = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>username</label>
          <input type="text" value={username} onChange={this.handleUsernameChange}></input>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comment} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <label>topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option >Node.js</option>,
            <option value="sequelize">Sequelize</option>
            <option value="Mongo db">Mongo db</option>
            <option value="React">React</option>
          </select>
        </div>
        <div>
          <button type="submit">button</button>
        </div>
      </form>
    )
  }
}

export default form
