import React from 'react';
import sound from './Little-Girl-Laughing-A1.mp3'

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
            minute: event.target.value,
            set: {
                min: event.target.value
            }
        })
        console.log(this.state.minute)
    }
    setSecond = (event)=>{
        this.setState({
            second: event.target.value,
            set: {
                sec: event.target.value
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
        console.log('minute',this.state.minute,'second',this.state.second)
        if(second>0){
            this.setState({
                second: second - 1
            })
        }
        if(second===0){
            if(minute===0){
                clearInterval(this.timerID);
                console.log('time-off')
                this.setState({
                    run: 'done'
                })
            } else {
                this.setState({
                    minute: minute - 1,
                    second: 59
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
        if(run=== 'off' || run==='done'){
            return (
                <div className='tc'>
                    <input onChange={this.setMinute} type='number' min='0' max='180'/>
                    <input onChange={this.setSecond} type='number' min='0' max='59' />
                    <h2>{minute} : {second}</h2>
                    <button onClick= {this.startTimer}>Start</button>
                    <button style={{color:'#dbcfc1'}}>Reset</button>
                    {run === 'done'
                        ?<div><audio src={sound} autoPlay/></div>
                        :<div></div>
                    }
                </div>
              )
        } if(run==='on'){
            return (
                <div className='tc'>
                    <h2>{minute} : {second}</h2>
                    <button style={{color:'#dbcfc1'}}>Start</button>
                    <button onClick= {this.resetTimer}>Reset</button>
                    {run === 'done'
                        ?<div><audio src={sound} autoPlay/></div>
                        :<div></div>
                    }
                </div>
              )
        }
        
    }
  
  }
  
  export default MyTimer;