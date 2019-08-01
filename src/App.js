import React, { Component } from 'react';
import './App.scss';
import Dataset from './components/Dataset'
import Drumpad from './components/Drumpad'  

class DrumMachine extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: ''
      }
    }
  handleDisplay = (display) => {
    this.setState({
      display: display
      })
    }
  render(){
    let { display } = this.state
    return(
      <div id="drum-machine">
        <div id="display">{ display }</div>
        <div id="drumpads">
        { Dataset.map(d => (
            <Drumpad
              letter={d.keyTrigger}
              id={d.id}
              url={d.url}
              handleDisplay={this.handleDisplay}/>
            ))
        }
        </div>
      </div>
      );
    }
  }

export default DrumMachine;