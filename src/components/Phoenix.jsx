import React, { Component } from 'react'

export default class Phoenix extends Component {
  render() {
    console.log('=======>> PROPS HERE ARE:',this.props)

    const {name, age, belt} = this.props;

    return (
      <div className='phoenix'>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Belt: {belt}</div>
      </div>
    )
  }
}
