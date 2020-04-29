import React from 'react';
import './App.css';

class MyClock extends React.Component {
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
      clearInterval(this.timeID);
  
    }
  
    tick(){
      this.setState({
        date: new Date(),
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
            <h1>{this.state.date.toLocaleTimeString()}</h1>
          </div>
        )
    }
  
  }
  
  export default MyClock;