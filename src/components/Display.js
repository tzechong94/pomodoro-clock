import React from "react";

function Display({ displayTime, currentMinute, currentSecond }) {

    return (

    <div>
        <h1>{currentMinute(displayTime)} : {String(Math.round(currentSecond(displayTime))).padStart(2,"0")}</h1>
    </div>
)
}

export default Display;