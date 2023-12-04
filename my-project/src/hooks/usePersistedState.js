import { useState } from "react";
export default function usePersistedState(key, defaultValue) {
    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return defaultValue;
    });

    const setPesistedState = (value) => {
        setState(value);

        let reversedValue;
        if (typeof value === 'function') {
            reversedValue = JSON.stringify(value(state));
        } else {
            reversedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, reversedValue);
    }

    return [
        state,
        setPesistedState,
    ];

}