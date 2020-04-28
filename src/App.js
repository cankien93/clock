import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      date : new Date()
    }
  }

  componentDidMount(){
    this.timeID = setInterval( ()=>
      this.tick(), 1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){

      return (
        <div className='App'>
          {this.state.date.getHours()>=19
            ?<p>Good evening, Kien </p>
            :this.state.date.getHours()<19 && this.state.date.getHours()>=13
            ?<p>Good afternoon, Kien </p>
            :<p>Good morning, Kien </p>}
          <h1>{this.state.date.toLocaleTimeString('vi-VI', {hour: '2-digit', minute:'2-digit'})}</h1>
  
        </div>
      )
  }

}

export default App;
