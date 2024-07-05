import React, {useState, useEffect, useRef} from "react";

function StopWatch(){

  const [isRunning, setIsRunning ] = useState(false);//checking if our stop watch is working

  const [elapsedTime, setElapsedTime] = useState(0);//state variable to check elapsed time

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

    if(isRunning){
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
//after every 10 seconds we set an elapsed time
    }

    return () => {
      clearInterval(intervalIdRef.current);
    }

  }, [isRunning]);//when the dependency is not working,there is a side code.

  function start(){//function to start the clock
    setIsRunning(true);
    startTimeRef = Date.now() - elapsedTime;

  }

  function stop(){//function to stop the clock
    setIsRunning(false);

  }
  function reset(){
    setIsRunning(false);
    setElapsedTime(0);

  }
  function formatTime(){

    let hours = Math.floor(elapsedTime / (1000 *60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 *60 ) % 60);
    let seconds = Math.floor(elapsedTime / (1000 ) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000 )/ 10);
    return `${hours}: ${minutes}:${seconds}:${milliseconds}`;

  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button onClick={start} className="start-button">Start</button>
        <button onClick={stop} className="stop-button">Stop</button>
        <button onClick={reset} className="reset-button">Reset</button>


      </div>

    </div>
  );

}

export default StopWatch;