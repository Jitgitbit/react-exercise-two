import React, {Component} from 'react';
import Phoenix from './components/Phoenixes';


class App extends Component {
  state = {
    phoenixes: [
      {name:'Thierry', age:40, belt:'black', id:1},
      {name:'Joachim', age:41, belt:'green', id:2},
      {name:'Luke', age:33, belt:'pink', id:3}
    ]
  }
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
        <Phoenix phoenixes={this.state.phoenixes}/>
      </div>
    );
  }
}

export default App;
