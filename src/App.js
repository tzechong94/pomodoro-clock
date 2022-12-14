import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Navigation from './components/Navigation';
import Settings from './components/Settings';
import Display from './components/Display';


function App() {
  let [ worktime, setWorktime ] = useState(25*60);
  // let [ savedWorktime, setSavedWorktime ] = useState(worktime);

  let [ shortresttime, setShortresttime ] = useState(5*60);
  // let [ savedShortResttime, setSavedShortResttime ] = useState(shortresttime);

  let [ longresttime, setLongresttime ] = useState(10*60);
  // let [ savedLongResttime, setSavedLongResttime ] = useState(longresttime);

  let [ displaytime, setDisplaytime ] = useState(worktime);
  
  let [ mode, setMode] = useState("pomodoro");
  let [ restcount, setRestcount ] = useState(0);
  let [currentRoute, setRoute] = useState('home');

  let [ playstate, setPlayState ] = useState(false);

  const pomoColor = 'hsl(0deg, 63%, 64%)';
  const shortColor = 'hsl(174deg, 70%, 42%)';
  const longColor = 'hsl(243deg, 84%, 76%)';
  const pomoColorLight = 'hsl(0deg, 63%, 74%)';
  const shortColorLight = 'hsl(174deg, 70%, 52%)';
  const longColorLight = 'hsl(243deg, 84%, 86%)';


  // const [rerender, setRerender] = useState(false);


  useEffect(() => {
    clearInterval(interval.current);
    countDown();
    // eslint-disable-next-line 
    }, [displaytime, playstate, mode]);

  useEffect(() => {
    clearInterval(interval.current);
    loadTime();
    // eslint-disable-next-line 
    }, [currentRoute]);
  

  function currentMinute(time) {
    return Math.floor(time/60);
  }

  function currentSecond(time) {
    return time%60;
  }


  let interval = useRef(null);

  function countDown() {
    if (playstate === true){
      interval.current = setInterval(()=>{
        setDisplaytime(displaytime-=1);
      },1000);
      if (displaytime === 0) {
        clearInterval(interval.current)
        modeSelect();
      }
    }
  }

  function modeSelect() {
    if (mode === "pomodoro" && restcount < 3) {
      setRestcount(restcount+=1);
      setMode("short");
      setDisplaytime(shortresttime);
      console.log("work ended, short rest now");
    } else if (mode === "pomodoro" && restcount === 3) {
      console.log("work ended, long rest now");
      setRestcount(0);
      setDisplaytime(longresttime);
      setMode("long");
      clearInterval(interval.current);
    } else if (mode === "short") {
      console.log("short rest ended, work now");
      setDisplaytime(worktime);
      setMode("pomodoro");
    } else if (mode === "long") {
      console.log("long rest ended, work now")
      setMode("pomodoro");
      setDisplaytime(worktime);
    }
  }

  function startTime() {
      setPlayState(true);
    }

  function stopTime() {
    setPlayState(false);
  }

  function resetTime(){
    setRestcount(0);
    if (mode === 'pomodoro') {
      setDisplaytime(worktime)
    } else if (mode === 'short') {
      setDisplaytime(shortresttime)
    } else {
      setDisplaytime(longresttime);
    }
  }

  // function countDown() {
  //   clearInterval(interval.current);
  //   if (playstate) {
  //     interval.current = setInterval(() => {
  //       setDisplaytime(displaytime-=1)
  //     }, 1000);
  //     // checkMode();
  //     if (displaytime === 0) {
  //       // clearInterval(interval.current);
  //       // setDisplaytime(worktime);
  //       checkMode();
  //       stopTime();
  //     }
  //   }
    
  // }
  

  // function checkMode() {
  //   if (mode === "pomodoro" && restcount < 3 && displaytime === 0) {
  //     stopTime();
  //     setRestcount(restcount+=1);
  //     setMode("short");
  //     setDisplaytime(shortresttime);
  //     console.log("work ended, short rest now");
  //   } else if (mode === "pomodoro" && restcount === 3 && displaytime === 0) {
  //     stopTime();
  //     console.log("work ended, long rest now");
  //     setRestcount(0);
  //     setDisplaytime(longresttime);
  //     setMode("long");
  //     clearInterval(interval.current);
    
  //   } else if (mode === "short" && displaytime === 0) {
  //     stopTime();
  //     console.log("short rest ended, work now");
  //     setDisplaytime(worktime);
  //     setMode("pomodoro");
  //   } else if (mode === "long" && displaytime === 0) {
  //     stopTime();
  //     console.log("long rest ended, work now")
  //     setMode("pomodoro");
  //     setDisplaytime(worktime);
  //   }
  // }





  // function startTime() {
  //   if (playstate === true){
  //     stopTime();
  //   } else {
  //     setPlayState(true);
  //     interval.current = setInterval(()=>{
  //       if (mode === "pomodoro") {
  //         setDisplaytime(displaytime-=1);
  //         console.log('mode', mode);
  //         console.log(displaytime);
  //         if (displaytime === 0) {
  //           if (restcount < 3) {
  //             setDisplaytime(shortresttime);
  //             setMode("short"); 
  //             console.log("work end, short now");
  //             console.log('shortrest', shortresttime);
  //             console.log('mode', mode);
  //             setRestcount(restcount+=1);             
  //           } else {
  //             setMode("long");
  //             setDisplaytime(longresttime);
  //             setRestcount(0);
  //           }
  //         }
  //       } else if (mode === "short") {
  //         setDisplaytime(displaytime-=1);
  //         console.log('mode', mode);

  //         console.log(displaytime);
  //         if (displaytime === 0){
  //           setMode('pomodoro');
  //           console.log('short ended, work now');
  //           setDisplaytime(worktime);
  //         }
  //       } else if (mode === "long") {
  //         setDisplaytime(displaytime-=1);
  //         console.log('mode', mode);

  //         console.log(displaytime);
  //         if (displaytime === 0){
  //           setMode('pomodoro');
  //           console.log('long ended, work now');
  //           setDisplaytime(worktime);

  //         }
  //     }
  //   },1000);
  // }}
  

      // function startTime() {
      //   console.log(playstate);
      //   if (playstate === false) {
      //     setPlayState(true);
      //     interval.current = setInterval(()=> {
      //       if (mode === "pomodoro") {
      //         setDisplaytime(worktime);
      //         if (displaytime > 0) {
      //         setDisplaytime(displaytime-=1);
      //           if (displaytime === 0) {
      //             if (restcount === 3) {
      //               setMode("long");
      //               setRestcount(0);
      //               console.log(restcount);
      //               console.log(mode);
      //               console.log("Time's up! Long Rest now.", mode);
                    
      //             } else {
      //               setMode("short");
      //               setRestcount(restcount+=1);
      //               console.log(restcount);
      //               console.log(mode);
      //               console.log("Time's up! Short Rest now.", mode);
      //             }
      //           }
      //          }
      //       } if (mode === "short") {
      //         setDisplaytime(shortresttime);
      //         // if (displaytime > 0) {
      //           setDisplaytime(displaytime-=1);
      //           if (displaytime ===0){
      //             console.log("Short rest is over, back to work!", mode);
      //             setMode("pomodoro");
      //           console.log(restcount);
              
      //       }
      //     } if (mode === "long") {
      //       setDisplaytime(longresttime);
      //       if (displaytime > 0) {
      //         setDisplaytime(displaytime-=1);
      //         if (displaytime ===0){
      //           console.log("Long rest is over, back to work!", mode);
      //           setMode("pomodoro");
      //           console.log(restcount);
      //         }
      //       }
      //     }    
      //   },1000);
      //   } else {
      //   stopTime();
      //     }}
    
  
  function loadTime(){
    if (mode === 'pomodoro') {
      setDisplaytime(worktime);
    } else if (mode === 'short') {
      setDisplaytime(shortresttime);
    } else {
      setDisplaytime(longresttime);
    }
  }

  function pomodoroBtn() {
    if (mode==="pomodoro"){
      return
    } else {
      setMode("pomodoro");
      document.querySelector(".App").style.backgroundColor = pomoColor;
      document.querySelector("html").style.backgroundColor = pomoColor;
      document.querySelector(".clock-container").style.backgroundColor = pomoColorLight;

      setDisplaytime(worktime);
      stopTime();
    }
  }

  function shortBreakBtn() {
    if (mode==="short"){
      return
    } else {
      setMode("short");
      document.querySelector(".App").style.backgroundColor = shortColor;
      document.querySelector("html").style.backgroundColor = shortColor;
      document.querySelector(".clock-container").style.backgroundColor = shortColorLight;

      setDisplaytime(shortresttime)
      stopTime();
    }  
  }

  function longBreakBtn() {
    if (mode==="long"){
      return
    } else {
      setMode("long");
      setDisplaytime(longresttime);
      document.querySelector(".App").style.backgroundColor = longColor;
      document.querySelector("html").style.backgroundColor = longColor;
      document.querySelector(".clock-container").style.backgroundColor = longColorLight;
      stopTime();
    } 
  }

  const onRouteChange = (route) => {
    loadTime();
    if (route === 'settings') {
      setRoute('settings');
    } else {
      setRoute('home');
    }
  }

  const onTimeSubmit = (pomodoro, short, long) => {
    resetTime();
    console.log(pomodoro, short, long);
    if (pomodoro === undefined) {
      setWorktime(25*60);
    }
    if (short === undefined) {
      setShortresttime(5*60);
    }
    if (long === undefined) {
      setLongresttime(10*60);
    } 
    if (pomodoro) {
      setWorktime(pomodoro*60);
    }
    if (short) {
      setShortresttime(short*60);
    }
    if (long) {
      setLongresttime(long*60);
    } 
    onRouteChange();
  }


  // const onWorktimeSubmit = () => {
  //   setWorktime(input)
  // }
  
  // const onShortrestSubmit = (value) => {
    
  // }
  
  // const onLongrestSubmit = (value) => {
    
  // }


  return (
    <div className="App">
      <Navigation className="navigation" onRouteChange={onRouteChange} currentRoute={currentRoute}/>

        { (currentRoute === "home") 
        ?
          (mode==="pomodoro")
          ?
          <Display displayTime={displaytime} currentMinute={currentMinute} currentSecond={currentSecond} pomodoroBtn={pomodoroBtn} shortBreakBtn={shortBreakBtn}
          longBreakBtn={longBreakBtn} playstate={playstate} stopTime={stopTime} resetTime={resetTime} startTime={startTime} />
          : (mode==="short")
          ?
          <Display displayTime={displaytime} currentMinute={currentMinute} currentSecond={currentSecond} pomodoroBtn={pomodoroBtn} shortBreakBtn={shortBreakBtn}
          longBreakBtn={longBreakBtn} playstate={playstate} stopTime={stopTime} resetTime={resetTime} startTime={startTime} />
          : 
          <Display displayTime={displaytime} currentMinute={currentMinute} currentSecond={currentSecond} pomodoroBtn={pomodoroBtn} shortBreakBtn={shortBreakBtn}
          longBreakBtn={longBreakBtn} playstate={playstate} stopTime={stopTime} resetTime={resetTime} startTime={startTime} />          
        
          : (<Settings
        onRouteChange={onRouteChange}
        onTimeSubmit={onTimeSubmit}
        loadTime={loadTime}/>
        )
      }
    
    </div>
  );
}

export default App;
