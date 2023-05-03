import React, { Component } from 'react';
import './App.css';
import Counters from './component/Counters';

class App extends Component {
  render() {
    return (
      <div className='app-css'>
        <Counters />
      </div>
    );
  }
}
export default App;
