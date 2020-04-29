import React from 'react';
import './App.css';
import MyClock from './MyClock';
import MyTimer from './MyTimer';

class App extends React.Component {


  render(){

      return (
        <div>
          <MyClock />
          <MyTimer />
        </div>
      )
  }

}

export default App;
