import React, {Component} from 'react';
import './App.css';
import Dashboard from './dashboard/Dashboard';


class App extends Component {
  
  constructor () {
    super()

  }

  render () {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}

export default App;
