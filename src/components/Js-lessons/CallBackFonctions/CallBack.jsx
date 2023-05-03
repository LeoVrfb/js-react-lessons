import React, { useCallback, useEffect, useState } from 'react'
import Why from './Why';
import { useSelector } from 'react-redux';

const CallBack = () => {

    const function1 = (callback1, callback2, callback3) => {
        setTimeout(() => {
            console.log('function 1 timed out');
            callback1(callback2, callback3)
        }, 1500);
    }

    const function2 = (callback1, callback2) => {
        setTimeout(() => {
            console.log('function 2 timed out');
            callback1(callback2)
        }, 2000);
    }

    const function3 = (callback1) => {
        setTimeout(() => {
            console.log('function 3 timed out');
            callback1()
        }, 1500);
    }

    const function4 = () => {
        setTimeout(() => {
            console.log('function 4 timed out');
        }, 4500);
    }

    useEffect(() => {
        function1(function2, function3, function4)
    }, []);

    return (
        <div>
            CallBack, voir dans la console !
        </div>
    )
}

export default CallBack
