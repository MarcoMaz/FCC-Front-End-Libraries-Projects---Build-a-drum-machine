import React, { Component } from 'react';

class Drumpad extends Component {
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeydown)
    }
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeydown)
    }
  handleClick = () => {
    this.audio.play()
    this.audio.currentTime = 0
    this.props.handleDisplay(this.props.id)
  }
  handleKeydown = (event) => {
    if(event.keyCode === this.props.letter.charCodeAt()){
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
      }
    }
  render(){
    const { id, letter, url } = this.props
    const { handleClick } = this
    return(
      <div
        className="drum-pad"
        id={id}
        onClick={handleClick}>
        <p>{letter}</p>
        <audio
          ref={ref => this.audio = ref}
          className='clip'
          src={url}
          id={letter}>
        </audio>
      </div>)
    }
  }

  export default Drumpad