import { useEffect, useState } from "react";

export const  useLocalStorage = (key: string, initialValue: string) => {

    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [value, setValue] = useState(() => {
        const persistedValue = localStorage.getItem(key);
        return persistedValue ? persistedValue : initialValue;
    });
    
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    useEffect(() => {
        localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue] as const;
}