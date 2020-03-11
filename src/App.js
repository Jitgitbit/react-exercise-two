import React from 'react';
import Phoenix from './components/Phoenix';


function App() {
  return (
    <div className="App">
      <h1>React exercise Two</h1>
      <p>Welcome :)</p>
      <hr/>
      <Phoenix name='Thierry' age='40' belt='Black'/>
      <hr/>
      <Phoenix name='Joachim' age='41' belt='Green'/>
    </div>
  );
}

export default App;
