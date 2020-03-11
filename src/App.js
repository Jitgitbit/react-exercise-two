import React, {Component} from 'react';
import Phoenixes from './components/Phoenixes';
import AddPhoenix from './components/AddPhoenix';


class App extends Component {
  state = {
    phoenixes: [
      {name:'Thierry', age:40, belt:'black', id:1},
      {name:'Joachim', age:41, belt:'green', id:2},
      {name:'Olivier', age:45, belt:'blue', id:4},
      {name:'Luke', age:33, belt:'pink', id:3}
    ]
  }
  addPhoenix = (phoenix) => {
    console.log(phoenix);

    phoenix.id = Math.random(); // more than likely unique

    // this.setState({
    //   phoenixes : this.phoenixes.push(phoenix)     // YES this would work, but NO we don't directly edit the state !!!!!
    // })

    // this.phoenixes.push(phoenix)                   // SAME REMARK AS ABOVE, no altering  global state !!!!!

    let newPhoenixes = [...this.state.phoenixes, phoenix];  // There you go, a new copy of the array, and a new phoenix added to it !
    this.setState({
      phoenixes: newPhoenixes
    })
  }
  deletePhoenix = (id) => {}
  render(){
    return (
      <div className="App">
        <h1>React exercise Two</h1>
        <p>Welcome :)</p>
        {/* <hr/>
        <Phoenix name='Thierry' age='40' belt='Black'/>
        <hr/>
        <Phoenix name='Joachim' age='41' belt='Green'/> */}
        <hr/>
        <Phoenixes phoenixes={this.state.phoenixes} deletePhoenix={this.deletePhoenix}/>
        <AddPhoenix addPhoenix={this.addPhoenix}/>
      </div>
    );
  }
}

export default App;
