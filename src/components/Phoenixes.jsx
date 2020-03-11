import React, { Component } from 'react'

export default class Phoenix extends Component {
  render() {
    console.log('=======>> PROPS HERE ARE:',this.props)

    const {phoenixes} = this.props;    // These two mean exactly the same, but this line is the DESTRUCTURED way !!
    // const phoenix = this.props.phoenix;

    const phoenixesList = phoenixes.map(phoenix => {
      return (
        <div className='phoenix'>
          <div>Name: {phoenix.name}</div>
          <div>Age: {phoenix.age}</div>
          <div>Belt: {phoenix.belt}</div>
          <p>-------------------</p>
        </div>
      )
    })

    
    return (
      // <div className='phoenix'>
      //   <div>Name: {name}</div>
      //   <div>Age: {age}</div>
      //   <div>Belt: {belt}</div>
      // </div>
      <div className="phoenix-list">
        {phoenixesList}
      </div>
    )
  }
}
