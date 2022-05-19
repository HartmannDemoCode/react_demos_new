/**
 * Purpose here is to show exemple of how to use the hook: useReducer to update more complex state (instead of using the useState hook).
 */
import React, { useEffect, useReducer, useRef } from 'react';

const Stopwatch = (props) => {
    /**
     * 4 different operations: start, stop, tick (update time), reset. These are being set in 4 different action objects.
     */
    // Initial state before update:
    const initialState = {
        isRunning: false,
        time: 0
    };
    // Reducer function
    const reducer = (state, action) => {
        switch (action.type) {
            case "start":
                return { ...state, isRunning: true };
            case "stop":
                return { ...state, isRunning: false };
            case "reset":
                return { isRunning: false, time: 0 };
            case "tick":
                return { ...state, time: state.time + 1 };
            default:
                throw new Error();
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);

    useEffect(() => {
        if (!state.isRunning) {
            return;
        }
        idRef.current = setInterval(() => dispatch({ type: 'tick' }), 1000);
        return () => {
            clearInterval(idRef.current);
            idRef.current = 0;
        };
    }, [state.isRunning]);


    return (
        <div>
            {state.time} Seconds <br/>
            <button onClick={() => dispatch({ type: 'start' })}>
                Start
            </button>
            <button onClick={() => dispatch({ type: 'stop' })}>
                Stop
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </div>
    );
};
export default Stopwatch;