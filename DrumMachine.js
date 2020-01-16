<html>
<div id='root'></div>
  
<!--
User Story #3: Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.

User Story #4: Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).

User Story #5: When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.

User Story #6: When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).

User Story #7: When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).  

User Story #1: I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.

User Story #2: Within #drum-machine I can see an element with a corresponding id="display".
-->
</html>
/*
CSS Flexbox review: https://www.w3schools.com/css/css3_flexbox.asp
*/
<style>

#drum-machine {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  //border: 1px solid blue;
}

#switchBank {
  width: 24vw;
  height: auto;
  background-color: pink;
  border-radius: 2em;
  margin: 10px;

}
#keypad {
  width: 24vw;
  height: 70vh;
  display: flex;
  flex-wrap: wrap; //to better demonstrate the align-content property
  align-content: space-around;
  justify-content: space-around;
  align-items: center;
  //border: 1px solid black
}

.drum-pad {
  width: 7vw;
  height: 20vh;
  text-align: center;
  background-color: pink;
  border: 1px solid black;
  border-radius: 2em;
}
</style>

/* JavaScript Keycode information:
https://keycode.info/ */

/* JavaScript Keycode information:
https://keycode.info/

Remember that in JSX, we use className instead of class. Also, the naming convention for all HTML attributes and event references in JSX become camelCase. i.e. a click event in JSX is onClick, instead of onclick. Likewise, onchange becomes onChange. 
*/

const sounds1 = [
  { letter: 'Q', id: 'Heater-1', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
  { letter: 'W',id: 'Heater-2', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
  { letter: 'E', id: 'Heater-3', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' }, 
  { letter: 'A', id: 'Heater-4', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
  { letter: 'S', id: 'Clap', src:'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { letter: 'D', id: 'Open-HH', src:'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { letter: 'Z', id: "Kick-n'-Hat", src:'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { letter: 'X', id: 'Kick', src:'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' }, 
  { letter: 'C', id: 'Closed-HH', src:'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
];

const sounds2 = [
  { letter: 'Q', id: 'Fart-1', src:'https://freesound.org/data/previews/20/20324_87858-lq.mp3' },
  { letter: 'W',id: 'Fart-2', src:'https://freesound.org/data/previews/61/61047_718003-lq.mp3' },
  { letter: 'E', id: 'Fart-3', src:'https://freesound.org/data/previews/58/58196_382028-lq.mp3' }, 
  { letter: 'A', id: 'Big Fart-1', src:'https://freesound.org/data/previews/64/64128_384275-lq.mp3' },
  { letter: 'S', id: 'Big Fart-2', src:'https://freesound.org/data/previews/16/16369_4948-lq.mp3' },
  { letter: 'D', id: 'Big Fart-3', src:'https://freesound.org/data/previews/249/249583_1181971-lq.mp3' },
  { letter: 'Z', id: "Long Fart-1", src:'https://freesound.org/data/previews/38/38594_384275-lq.mp3' },
  { letter: 'X', id: 'Long Fart-2', src:'https://freesound.org/data/previews/94/94989_1391979-lq.mp3' }, 
  { letter: 'C', id: 'Long Fart-3', src:'https://freesound.org/data/previews/37/37733_384275-lq.mp3' },
]   


class DrumPad extends React.Component {
constructor(props) {
  super(props);
  
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.handleClick = this.handleClick.bind(this);
}

componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress) 
  //window.focus() //Makes a request to bring the window to the front so pressing keys works without clicking first
}

componentWillUnmount() {
  document.removeEventListener('keydown', this.handleKeyPress) 
}

/*https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt */
handleKeyPress(event) {
  if (event.keyCode == this.props.letter.charCodeAt()){
    this.handleClick()
  }
}

handleClick() {
  this.audio.play()
  this.audio.currentTime = 0  //allows repeated keys quickly
  this.props.handleDisplay(this.props.id)
}

render() {
  return (
    <div className='drum-pad' id={this.props.id} onClick={this.handleClick}>
      <h2>{this.props.letter}</h2>
      <audio 
        ref={audio => this.audio = audio}
        className='clip' src={this.props.src} id={this.props.letter}>
      </audio>
    </div> 
  )
}
}

class App extends React.Component {
constructor(props) {
  super(props)

  this.state = {
    display: 'Click or Press Key',
    currentSoundBank: sounds1,
    currentColor: 'green'
  }
  this.handleBank = this.handleBank.bind(this);
  this.handleDisplay = this.handleDisplay.bind(this);
}

handleBank() {
  if (this.state.currentSoundBank == sounds1) {
    this.setState({ 
      currentSoundBank: sounds2,
      currentColor: 'white'
    });
  } else {
        this.setState({
          currentSoundBank: sounds1,
          currentColor: 'green'
        });
  }
}

handleDisplay(displayId) {
  this.setState({
    display: displayId
  });
}

render() {
  return (
    <div id='drum-machine'>
      <button id='switchBank' onClick={this.handleBank} style={{backgroundColor:this.state.currentColor}}>
        <h2>Switch Sound Banks</h2>{/*add a switch button to switch sound banks*/}
      </button>
      <div id='display'>{this.state.display}</div>
      <div id='keypad'> 
        {this.state.currentSoundBank.map(a => (
        <DrumPad
          id={a.id}
          letter={a.letter}
          src={a.src}
          handleDisplay={this.handleDisplay}
          />
        ))}
      </div>
    </div>
  )
}
}

ReactDOM.render(<App />, document.getElementById('root'));



