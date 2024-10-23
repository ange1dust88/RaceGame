import React, { useState, useEffect } from 'react';
import '../index.css';

function UI({ setTimerStarted, stopTimer }) {
  const [timer, setTimer] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    let interval;
    if (start && !stopTimer) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }

    if (stopTimer) {
      clearInterval(interval); 
    }

    return () => clearInterval(interval);
  }, [start, stopTimer]);

  const handleStart = () => {
    setStart(true); 
    setTimerStarted(true);  
  };

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="UI">
        {stopTimer ? (
            <p className="finished__timer">
                {formatTime(timer)}
             </p>
        )
        :(
            <p className="timer">
                {formatTime(timer)}
            </p>

        )}
      {!start && (
        <button className="btn" onClick={handleStart}>
          Start Game
        </button>
      )}
    </div>
  );
}

export default UI;
