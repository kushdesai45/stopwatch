import { useState } from 'react';
import './App.css';
import { useRef } from 'react';

function App() {

  //create a counter that will increase the counter by 10 seconds:
  const [timer,setTimer] = useState(0) //set Time in seconds
  const [isRunning,setIsRunning] = useState(true);
  const timerRef = useRef(0);

  const setTime = () =>{
    if(isRunning){
      timerRef.current = setInterval(()=>{
        setTimer((prevTime)=>prevTime+1);
      },1000)
      setIsRunning(false);
    }else{
      console.log("id",timerRef.current)
      clearInterval(timerRef.current);
      setIsRunning(true);
    }
  }

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTimer(0);
    setIsRunning(false);
  }

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${minutes}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <div>
        <button onClick={setTime}>
          { isRunning ? 'Start' : 'Stop'}
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
