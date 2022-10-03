import React, { useState } from 'react';


const Settings = ({ onTimeSubmit, worktime, shortresttime, longresttime }) => {
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
        <div className="container">
        <fieldset>
            <div>
                <p>Pomodoro</p>
                <input type="number" min="0" max="59" defaultValue="25" id="pomodoro" onChange={onPomodoroChange}></input>
            </div>
            <div>
                <p>Short Rest</p>
                <input type="number" min="0" max="59" defaultValue="5" id="short" onChange={onShortChange}></input>
            </div>
            <div>
                <p>Long Rest</p>
                <input type="number" min="0" max="59" defaultValue="10" id="long" onChange={onLongChange}></input>
            </div>
            <input type="submit" onClick={()=>onTimeSubmit(pomodoroinput, shortinput, longinput)}/>

        </fieldset>
        </div>
    )
}


export default Settings;