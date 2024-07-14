import { useState, useEffect } from "react";

export default function Timer() {
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let id;

    if (isRunning && timer > 0) {
      id = setInterval(() => {
        setTimer((prevTime) => Math.max(prevTime - 1, 0));
        // setTimer((prevValue) => { return  prevValue*500 });
        console.log(timer)
      }, 4000);

      setInterval( () => {}, 5000)
    }

    if (timer === 0) {
      clearInterval(id);
      setIsRunning(false);
      setInitialTime(0);
      setTimer(0);
    }

    return () => {
      if (timer > 0) {
        clearInterval(id);
      }
    };
  }, [isRunning, timer]);

  function startFunc() {
    if (!isRunning) {
      setIsRunning(true);
      setTimer(timer > 0 ? timer : initialTime);
    }
  }

  function stopFunc() {
    setIsRunning(false);
    // setTimer(0); // No need to set timer to 0 here
  }

  function resetFunc() {
    setIsRunning(false);
    setInitialTime(0);
    setTimer(0);
  }

  return (
    <div className="stop-watch" data-cy="timer">
      <div id="main">
        <div>
          <h2>UseEffect Timer</h2>
          <br />
          <input
            id="initial"
            type="number"
            value={initialTime}
            onChange={(e) => {
              setInitialTime(parseInt(e.target.value));
            }}
          />
          <br />
          <br />
          <div>
            <button id="start" onClick={startFunc}>
              Start
            </button>
            <button id="stop" onClick={stopFunc}>
              Stop
            </button>
            <button id="reset" onClick={resetFunc}>
              Reset
            </button>
          </div>
        </div>

        <>
          {timer === 0 && <h2 id="timer-up" >Time's Up</h2>}
          {timer > 0 && <h1 id="timer">{timer}</h1>}
        </>
      </div>
    </div>
  );
}
