import React from "react";

function Display({ displayTime, currentMinute, currentSecond, pomodoroBtn, shortBreakBtn, longBreakBtn, playstate, stopTime, resetTime, startTime }) {

    return (

    <div className="clock-container">
        <div className="selection">
            <button className="btn" onClick={pomodoroBtn}>Pomodoro</button>
            <button className="btn" onClick={shortBreakBtn}>Short Break</button>
            <button className="btn" onClick={longBreakBtn}>Long Break</button>
        </div>

        <h1 className="displayTime">{currentMinute(displayTime)} : {String(Math.round(currentSecond(displayTime))).padStart(2,"0")}</h1>
        {
      (!playstate) ?
      <button className="btn btn-primary" onClick={startTime}>Start</button>
      :
      <button className="btn btn-primary" onClick={stopTime}>Stop</button>
    }
    
    <button className="btn btn-primary" onClick={resetTime}>Reset</button> 

    </div>
)
}

export default Display;