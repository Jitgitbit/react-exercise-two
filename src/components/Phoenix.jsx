import React, { Component } from 'react'

export default class Phoenix extends Component {
  render() {
    console.log('=======>> PROPS HERE ARE:',this.props)
    return (
      <div className='phoenix'>
        <div>Name: {this.props.name}</div>
        <div>Age: {this.props.age}</div>
        <div>Belt: {this.props.belt}</div>
      </div>
    )
  }
}
