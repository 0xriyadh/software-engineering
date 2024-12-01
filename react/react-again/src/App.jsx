import { useState } from "react";
import useInterval from "./hooks/useInterval.jsx";

export default function Page() {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(count + 1);
    }, 1000);

    return (
        <>
            <h1>Timer is at {count}</h1>
        </>
    );
}
