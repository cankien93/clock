import React from 'react';
import sound from './Little-Girl-Laughing-A1.mp3'

class MyTimer extends React.Component {
    constructor(){
      super();
      this.state={
        second : 0,
        minute : 2,
        run: 'off'
      }
    }
  
    startTimer = ()=>{
      this.timerID = setInterval( ()=>
        this.tickTimer(), 1000
      );
      this.setState({
          run: 'on'
      })
    }
  
  
    tickTimer(){
  
      if(this.state.second===0){
        if(this.state.minute===0){
          clearInterval(this.timerID);
        } else{
          this.setState({
            second: 59,
            minute: this.state.minute -1
          })
        }
      }else{
        this.setState({
          second: this.state.second - 1
        })
      }
    }
    
    stopTimer=()=>{
        clearInterval(this.timerID);
        this.setState({
            run:'off'
        })
    }
    
    resetTimer = ()=>{
        this.setState({
            minute: 2,
            second: 0
        });
        clearInterval(this.timerID)
        this.setState({
            run:'off'
        })
    }


    render(){
        const {minute, second, run}= this.state;
        return (
          <div className='tc'>
            <h2>{minute} : {this.state.second}</h2>
          
            {run === 'off'
                ?<button onClick= {this.startTimer}>Start</button>
                :<button style={{color:'#dbcfc1'}}>Start</button>
            }

            {run === 'on'
                ?<button onClick= {this.stopTimer}>Stop</button>
                :<button style={{color:'#dbcfc1'}}>Stop</button>
            }
            
            {run === 'on'
                ?<button onClick= {this.resetTimer}>Reset</button>
                :<button style={{color:'#dbcfc1'}}>Reset</button>
            }

            {minute === 0 && second === 0 
                ?<div><audio src={sound} autoPlay/></div>
                :<div></div>
            }
          </div>
        )
    }
  
  }
  
  export default MyTimer;