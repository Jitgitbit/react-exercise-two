import React, { Component } from 'react'

export default class AddPhoenix extends Component {
  state = {
    name: null,
    age: null,
    belt: null
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.addPhoenix(this.state)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name:</label>
          <input type='text' id='name' onChange={this.handleChange}/>
          <label htmlFor='name'>Age:</label>
          <input type='text' id='age' onChange={this.handleChange}/>
          <label htmlFor='name'>Belt:</label>
          <input type='text' id='belt' onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
