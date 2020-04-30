import React from 'react';
import sound from './Little-Girl-Laughing-A1.mp3';
import Button from 'react-bootstrap/Button';


class MyTimer extends React.Component {
    constructor(){
      super();
      this.state={
        second : 0,
        minute : 0,
        run: 'off',
        set: {
            sec: 0,
            min: 0
        }
      }
    }
    
    setMinute = (event)=>{
        this.setState({
            minute: parseInt(event.target.value),
            set: {
                min: parseInt(event.target.value)
            }
        })
        console.log(this.state.minute)
    }
    setSecond = (event)=>{
        this.setState({
            second: parseInt(event.target.value),
            set: {
                sec: parseInt(event.target.value)
            }
        })
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
        const {second, minute} = this.state
        console.log('minute',typeof(minute),this.state.minute,'second',this.state.second)
        if(second>0){
            this.setState({
                second: second - 1
            })
        }
        if(second===0){
            if(minute===0){
                clearInterval(this.timerID);
                this.setState({
                    run: 'done'
                })
            } else {
                this.setState({
                    minute : minute -1,
                    second : 59
                })
            }
        }  
    }
   
    resetTimer = ()=>{
        this.setState({
            minute: 0,
            second: 0
        });
        clearInterval(this.timerID)
        this.setState({
            run:'off'
        })
    }
    
    render(){
        const {minute, second, run}= this.state;
        
        const inputMinute = run === 'off'
            ?<input onChange={this.setMinute} type='number' min='0' max='180' className='mr-2'/>
            :null
        
        const inputSecond = run === 'off'
            ?<input onChange={this.setSecond} type='number' min='0' max='59' />
            :null
        
        const countDown = <h2>{minute} : {second}</h2>
        
        const buttonStart = run === 'off'
            ?<Button onClick= {this.startTimer} className="btn btn-dark mr-3">Start</Button>
            :run === 'on'
                ?<Button className="btn btn-light mr-3">Start</Button>
                :<Button className="btn btn-light mr-3">Start</Button>
        
        const buttonReset = run === 'off'
            ?<Button className="btn btn-light">Reset</Button>
            :run === 'on'
                ?<Button onClick= {this.resetTimer} className="btn btn-dark">Reset</Button>
                :<Button onClick= {this.resetTimer} className="btn btn-dark">Reset</Button>
        
        const soundEffect = run === 'done'
            ?<div><audio src={sound} autoPlay/></div>
            :null

        return (
            <div className='tc'>
                <h2>Timer</h2>
                {inputMinute}
                {inputSecond}
                {countDown}
                {buttonStart}
                {buttonReset}
                {soundEffect}
            </div>
            )
    }
  }
  
  export default MyTimer;