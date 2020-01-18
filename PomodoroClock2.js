const SetTimer = props => (
  <div className="timer-container">
    <div id={`${props.type}-label`}>
      {props.type === "session" ? "Session" : "Break"} Length
    </div>
    <div className="timer-controls">
      <button
        id={`${props.type}-decrement`}
        onClick={() => props.handleSetTimer(false, `${props.type}Time`)}
      >
        &darr;
      </button>
      <div id={`${props.type}-length`}>{props.value}</div>
      <button
        id={`${props.type}-increment`}
        onClick={() => props.handleSetTimer(true, `${props.type}Time`)}
      >
        &uarr;
      </button>
    </div>
  </div>
);

const Timer = props => {
  return (
    <div className="timer">
      <h1 id="timer-label">{props.mode == "session" ? "Session" : "Break"}</h1>
      <h1 id="time-left">{props.convertToMinSec}</h1>
    </div>
  );
};

const Controls = props => {
  return (
    <div className="controls">
      <button id="start_stop" onClick={props.handlePlayPause}>
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
      breakTime: 5,
      sessionTime: 25,
      timerMode: "session",
      timer: 1500000,
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

  convertToMinSec(timer) {
    let minutes = parseInt(timer / 1000 / 60, 10);
    let seconds = parseInt((timer / 1000) % 60, 10);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  handleSetTimer(incr, type) {
    if (this.state[type] === 60 && incr) return;
    if (this.state[type] === 1 && !incr) return;
    this.setState({ [type]: this.state[type] + (incr ? 1 : -1) });
  }

  handlePlayPause() {
    if (this.state.playOrPause == "play") {
      clearInterval(this.timeTracker);
      this.setState({ playOrPause: "pause" });
    } else {
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
    clearInterval(this.timeTracker);
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
        <Timer
          mode={this.state.timerMode}
          convertToMinSec={this.convertToMinSec(this.state.timer)}
        />
        <Controls
          playOrPause={this.state.playOrPause}
          handlePlayPause={this.handlePlayPause}
          handleReset={this.handleReset}
        />
        <audio
          id="beep"
          src="https://freesound.org/data/previews/352/352661_4019029-lq.mp3"
          ref={audio => (this.audio = audio)}
        ></audio>
      </div>
    );
  }
}

ReactDOM.render(<PomodoroClock />, document.getElementById("root"));
