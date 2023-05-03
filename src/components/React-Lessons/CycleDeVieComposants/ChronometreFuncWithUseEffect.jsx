import React, { useState, useEffect } from 'react';

const ChronometreFuncUse = () => {
  const [seconds, setSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'p') {
        setIsPaused((prevIsPaused) => !prevIsPaused);
      } else if (event.key === 'r') {
        setSeconds(0);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    let intervalId;
    if (!isPaused) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isPaused]);

  const handlePauseClick = () => {
    setIsPaused((prevIsPaused) => !prevIsPaused);
  };

  const handleResetClick = () => {
    setSeconds(0);
    setIsPaused(false);
  };

  return (
    <div>
      <h1>Chronometer</h1>
      <h2>{seconds} seconds</h2>
      <button onClick={handlePauseClick}>{isPaused ? 'Resume' : 'Pause'}</button>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default ChronometreFuncUse;
