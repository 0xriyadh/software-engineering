import { useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [inputValue, setInputValue] = useState(1);

    console.time("Counting");
    let count = 0;
    for (let i = 0; i <= inputValue; i++) {
        console.log("Counting...");
        count += i;
    }
    console.timeEnd("Counting");

    return (
        <>
            <input
                type="number"
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
            <p>Sum is {count}</p>
            <button onClick={() => setCounter(counter + 1)}>
                Counter ({counter})
            </button>
        </>
    );
}

export default App;
