import { useEffect, useState } from "react";
import useDebounce from "./hooks/useDebounce";

export default function Page() {
    const [inputValue, setInputValue] = useState("");
    const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

    // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
    useEffect(() => {
        console.log("sending search request for: ", debouncedValue);
    }, [debouncedValue]);
    return (
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Search..."
        />
    );
}
