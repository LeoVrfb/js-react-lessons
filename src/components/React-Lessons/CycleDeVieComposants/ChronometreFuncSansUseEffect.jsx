import React, { useState } from 'react';

function ChronometreFunc() {
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    function startChrono() {
        if (!intervalId) {
            const newIntervalId = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
            setIntervalId(newIntervalId);
        }
    }

    function pauseChrono() {
        clearInterval(intervalId);
        setIntervalId(null);
    }

    function resetChrono() {
        setSeconds(0);
        pauseChrono();
    }

    return (
        <div>
            <h1>{seconds} seconds</h1>
            <button onClick={startChrono}>Start</button>
            <button onClick={pauseChrono}>Pause</button>
            <button onClick={resetChrono}>Reset</button>
        </div>
    );
}

export default ChronometreFunc;
