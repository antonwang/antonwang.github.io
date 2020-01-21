<html>
  <body>
    <div id='root'></div>
  </body>
</html>

<style>
body {
  background-color: pink;
}

.row {
  //border: 1px solid black;
  height: 100vh;
  //margin: top, right, bottom, left
  margin: 0 20vw 0 20vw
}

span {
  font-size: 30px;
  padding: 20px;
}

#break-decrement {
  background-color: red;
  border: red;
}
#session-decrement {
  background-color: red;
  border: red;
}

.timerboard-container {
  background-color: orange;
  border-radius: 4em;
  //margin: top & bottom, left & right
  //margin: 0 1vw;
  padding: 10px;
}

.timer-controls {
  //border: 1px solid black;
  padding: 15px 0px;
}
#reset, #start_stop {
  margin: 10px;
  //border: 1px solid black;
}

</style>
//In a stateless functional component, we can use the shortcut props => ( ) instead of props => { return ( )} if we are not defining anything before return
const SetTimer = props => (
  <div className="timer-container text-center" >
    <h3 id={`${props.type}-label`}>
      {props.type === "session" ? "Session" : "Break"} Length
    </h3>
    <div className="timer-controls">
      <button
        id={`${props.type}-decrement`}
        //with onClick, use ES6 function for passing arguments into method per Mosh on youtube
        onClick={() => props.handleSetTimer(false, `${props.type}Time`)}
        className="btn btn-primary" data-toggle="button">
        {/* &darr; is down arrow   https://www.w3schools.com/charsets/ref_utf_arrows.asp */}
        &darr;
      </button>
      <span className="" id={`${props.type}-length`}>{props.value}</span>
      <button
        id={`${props.type}-increment`}
        onClick={() => props.handleSetTimer(true, `${props.type}Time`)}
        className="btn btn-success" data-toggle="button">
        &uarr;
      </button>
    </div>
  </div>
);

//Proving that we can use the shortcut props => ( )  or props => { return ( )}
const TimerBoard = props => {
  return (
    <div className='timerboard-container text-center'>
      <h3 id='timer-label'>{props.mode}</h3>
      <h2 id='time-left'>{props.timeLeft}</h2>
    </div>
  );
};

//for learning purpose, just including an example of using the class component vs stateless functional component - notice the difference in using this.props.method vs props.method respectively, and the inclusion of render in class component
class TimerControls extends React.Component {
  render() {
    return (
      <div className="timer-controls text-center">
        <button id="start_stop" className="btn btn-info" onClick={this.props.handlePlayPause}>
          {/*could also use unicode <span>&#9658;</span> : <span>&#9611;&#9611;</span>  */}

          {this.props.atPause ?
            <i className="fa fa-play fa-2x"></i> : 
            <i className="fa fa-pause fa-2x"></i>
          }
        </button>
        <button id="reset" className="btn btn-info" onClick={this.props.handleReset}>
          <i className="fa fa-refresh fa-2x" ></i>
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5, //break time after each session
      sessionTime: 25,  ////session time set to 25 for a typical pomodoro clock
      timerMode: "Session",
      timeLeft: 60 * 25,
      userInput: false, //user hits play is set to false initially
      atPause: true
    };

    //bind methods to allow this.state calls
    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleStartTimer = this.handleStartTimer.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }
  
  //convert time to display in minutes and seconds  MM:SS.
  //notice that this method is not bound using .bind(this) because this method doesn't call this.state
  convertToMinSec(timer) {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }
  
  //increment or decrement break/session intervals and making sure numbers are between 1-60 inclusively
  handleSetTimer(incr, type) {
    if (!this.state.userInput) { //if user has not hit play button
      //increment or decrement sessionTime and storing info into timeLeft too
      if (type === 'sessionTime' && this.state[type] < 60 && incr === true) {
        let newIncrementTime = this.state[type] + 1;
        this.setState ({
          [type]: newIncrementTime,
          timeLeft: 60 * newIncrementTime
        })
      }
      if (type === 'sessionTime' && this.state[type] >1 && incr === false) {
        let newDecrementTime = this.state[type] - 1;
        this.setState ({
          [type]: newDecrementTime,
          timeLeft: 60 * newDecrementTime
        })
      }
      //increment or decrement breakTime and storing info 
      if (type === 'breakTime' && this.state[type] < 60 && incr === true) { 
        this.setState ({
          [type]: this.state[type] + 1
        })
      }
      if (type === 'breakTime' && this.state[type] >1 && incr === false) {
        this.setState ({
          [type]: this.state[type] - 1
        })
      } 
    }
  }
  
  //3 purposes. 1: toggles atPause to true/false  2: limit user when timer is played  3: performs countdown
  handlePlayPause() {
    //using (boolean ? return if true : return if false) eliminates many lines of code of if/else statement
    this.setState({
      atPause: this.state.atPause ? false : true
    })
    
    //prevents user from changing intervals when pomodoro clock is initiated; only start timer on the initial play hit, until reset.
    if (!this.state.userInput) {
      this.setState({
        userInput: true
      });
      this.handleStartTimer(this.state.breakTime, this.state.sessionTime);
    }
  }

  //Performs countdown using setInterval when timer is played. When timeLeft= 0, switch to another interval
  handleStartTimer(breakInterval, sessionInterval) {
    let inSession = true;
    let timer = 60 * sessionInterval;

    //https://www.w3schools.com/jsref/met_win_setinterval.asp
    //when the play button is pressed, we substract 1000 ms from timerState with every passing 1000 ms  
    let displayTimeLeft = setInterval(async () => {
      if (!this.state.atPause) {
        timer -= 1;
      }

      await this.setState(state => ({
        timeLeft: timer
      }));

      if (await timer <= 0) {
        if (inSession) {
          inSession = false;
          timer = 60 * breakInterval;
        } else {
          inSession = true;
          timer = 60 * sessionInterval;
        }
        this.setState(state => ({
          timerMode: inSession ? "Session" : "Break",
          timeLeft: timer
        }));
        this.audio.play();
      }
    }, 1000);
    
    this.setState({ //created a new property for handleReset method to stop the setInterval countdown
      displayTimeLeft //shortcut for displayTimeLeft: displayTimeLeft 
    });
  }

  
  //Resets the state's keys to the original values
  handleReset() {
    this.audio.pause(); //stops the audio
    this.audio.currentTime = 0; //reset the audio playback to 0
    clearInterval(this.state.displayTimeLeft); //stop the setInterval countdown
    this.setState({
      breakTime: 5,
      sessionTime: 25,
      timerMode: "Session",
      timeLeft: 60 * 25,
      userInput: false, //user hits play is set to false initially
      atPause: true 
    });
  }

  render() {
    return (
      <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-6">
              <SetTimer
                type="break"
                value={this.state.breakTime}
                handleSetTimer={this.handleSetTimer}
              />              
              <SetTimer
                type="session"
                value={this.state.sessionTime}
                handleSetTimer={this.handleSetTimer}
              />
            </div>
            <div className="col-md-6">
              <TimerBoard
                mode={this.state.timerMode}
                timeLeft={this.convertToMinSec(this.state.timeLeft)}
              />
              <TimerControls
                atPause={this.state.atPause}
                handlePlayPause={this.handlePlayPause}
                handleReset={this.handleReset}
              />
            </div>
          </div>

        <audio
          id="beep"
          ref={audio => {
            this.audio = audio;
          }}
          src="https://freesound.org/data/previews/352/352661_4019029-lq.mp3"
        />
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
