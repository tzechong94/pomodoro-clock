import React, { useState } from 'react';


const Settings = ({ onTimeSubmit, worktime, shortresttime, longresttime, onRouteChange, loadTime }) => {
    let [ pomodoroinput, setPomodoroinput ] = useState(worktime);
    let [ shortinput, setShortinput ] = useState(shortresttime);
    let [ longinput, setLonginput ] = useState(longresttime);

    const onPomodoroChange = (event) => {
        setPomodoroinput(event.target.value)
    }

    const onShortChange = (event) => {
        setShortinput(event.target.value)
    }

    const onLongChange = (event) => {
        setLonginput(event.target.value)
    }


    return  (
        <div className="settings-container clock-container">
            <p>Change the duration here and click submit.</p>
        <fieldset>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Pomodoro</span>
                </div>
                <input className="input-group-prepend form-control" type="number" min="0" max="59" defaultValue="25" id="pomodoro" onChange={onPomodoroChange}></input>
            </div>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Short Rest</span>
                </div>
                <input className="input-group-prepend form-control" type="number" min="0" max="59" defaultValue="5" id="short" onChange={onShortChange}></input>
            </div>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">Long Rest</span>
                </div>
                <input className="input-group-prepend form-control" type="number" min="0" max="59" defaultValue="10" id="long" onChange={onLongChange}></input>
            </div>
            <input type="submit" className="submit-btn btn btn-primary" onClick={()=> {onTimeSubmit(pomodoroinput, shortinput, longinput); onRouteChange("home"); loadTime();}}/>

        </fieldset>
        </div>
    )
}


export default Settings;