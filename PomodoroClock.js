const SetTimer = (
  props // (props) => { return () } or here we use the shortcut (props) => ( )
) => (
  <div className="timer-container">
    <div id={`${props.type}-label`}>
      {props.type === "session" ? "Session" : "Break"} Length
    </div>
    <div className="timer-controls">
      <button
        id={`${props.type}-decrement`}
        onClick={() => props.handleSetTimer(false, `${props.type}Time`)}
      >
        {" "}
        &darr;
      </button>
      {/* &darr; is down arrow   https://www.w3schools.com/charsets/ref_utf_arrows.asp */}
      <div id={`${props.type}-length`}>{props.value}</div>
      <button
        id={`${props.type}-increment`}
        onClick={() => props.handleSetTimer(true, `${props.type}Time`)}
      >
        {" "}
        &uarr;
      </button>
    </div>
  </div>
);

const Timer = props => {
  return (
    <div className="timer">
      <h1 id="timer-label">{props.mode == "session" ? "Session" : "Break"}</h1>
      <h1 id="time-left">{props.timer}</h1>
    </div>
  );
};

const Controls = props => {
  return (
    <div className="controls">
      <button id="start_stop" onClick={props.handlePlayPause}>
        {/*could also use unicode <span>&#9658;</span> : <span>&#9611;&#9611;</span>  */}
        {props.playOrPause == "pause" ? (
          <i className="fa fa-play fa-2x"></i>
        ) : (
          <i className="fa fa-pause fa-2x"></i>
        )}
      </button>
      <button id="reset">
        <i className="fa fa-refresh fa-2x" onClick={props.handleReset}></i>
      </button>
    </div>
  );
};

class PomodoroClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakTime: 5, //break time after each session
      sessionTime: 25, //session time set to 25 for a typical pomodoro clock
      timerMode: "session",
      timer: 1500000, // from 25 minutes x 60 seconds/minute x 1000 ms/second
      playOrPause: "pause",
      userInput: false
    };

    this.handleSetTimer = this.handleSetTimer.bind(this);
    this.handlePlayPause = this.handlePlayPause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.timer === 0 && prevState.timerMode === "session") {
      this.setState({
        timer: this.state.breakTime * 60 * 1000,
        timerMode: "break"
      });
      this.audio.play();
    }
    if (prevState.timer === 0 && prevState.timerMode === "break") {
      this.setState({
        timer: this.state.sessionTime * 60 * 1000,
        timerMode: "session"
      });
      this.audio.play();
    }
  }

  handleSetTimer(incr, type) {
    if (this.state[type] === 60 && incr) return;
    if (this.state[type] === 1 && !incr) return;
    this.setState({
      [type]: this.state[type] + (incr ? 1 : -1)
    });
    /*if (this.state.hasOwnProperty('sessionTime')) {
    this.setState ({
      timer: this.state.sessionTime * 60 * 1000
    })
  }*/
  }

  handlePlayPause() {
    if (this.state.playOrPause == "play") {
      //if timer is playing, onClick would pause it and change timerState to false
      clearInterval(this.timeTracker);
      this.setState({ playOrPause: "pause" });
    } else {
      //https://www.w3schools.com/jsref/met_win_setinterval.asp
      //when the play button is pressed, we substract 1000 ms from timerState with every passing 1000 ms
      //REVIEW THIS BOTTOM BLOCK CODE
      if (this.state.userInput) {
        this.timeTracker = setInterval(
          () => this.setState({ timer: this.state.timer - 1000 }),
          1000
        );
        this.setState({ playOrPause: "play" });
      } else {
        this.setState(
          {
            timer: this.state.sessionTime * 60 * 1000,
            userInput: true,
            playOrPause: "play"
          },
          () =>
            (this.timeTracker = setInterval(
              () => this.setState({ timer: this.state.timer - 1000 }),
              1000
            ))
        );
      }
    }
  }

  handleReset() {
    this.setState({
      breakTime: 5,
      sessionTime: 25,
      timerMode: "session",
      timer: 1500000,
      playOrPause: "pause",
      userInput: false
    });
    clearInterval(this.timeTracker); //stop the setInterval countdown below
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  render() {
    return (
      <div className="flex-container">
        <h1>Pomodoro Clock</h1>
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
        {/*more info on moment.js: https://momentjs.com/docs/#/displaying/format/ ; could also calculate min:sec using algorithm: parseInt(counter / 60) + ':' + (counter % 60); */}
        <Timer
          mode={this.state.timerMode}
          timer={moment(this.state.timer).format("mm:ss")}
        />
        <Controls
          playOrPause={this.state.playOrPause}
          handlePlayPause={this.handlePlayPause}
          handleReset={this.handleReset}
        />
        <audio
          id="beep"
          src="https://freesound.org/data/previews/352/352661_4019029-lq.mp3"
          ref={e => (this.audio = e)}
        ></audio>
      </div>
    );
  }
}

ReactDOM.render(<PomodoroClock />, document.getElementById("root"));
