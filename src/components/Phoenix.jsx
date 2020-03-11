import React, { Component } from 'react'

export default class Phoenix extends Component {
  render() {
    console.log('=======>> PROPS HERE ARE:',this.props)
    return (
      <div className='phoenix'>
        <div>Name: Thierry</div>
        <div>Age: 39</div>
        <div>Belt: Black</div>
      </div>
    )
  }
}
