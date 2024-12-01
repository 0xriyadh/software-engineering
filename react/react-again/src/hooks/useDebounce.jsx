import { useEffect, useState } from "react";

const useDebounce = (inputValue, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(inputValue);

    useEffect(() => {
        console.log("useDebounce", inputValue);
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, delay);

        return () => {
            console.log("useDebounce cleanup", inputValue);
            clearTimeout(handler);
        };
    }, [inputValue, delay]);

    return debouncedValue;
};

export default useDebounce;
