import { useEffect } from "react";
import ContextAPI from "./components/ContextAPI/ContextAPI.jsx";

export default function Page() {
    useEffect(() => {
        window.addEventListener("offline", () => {
            console.log("You are offline");
        });
        console.log(window.navigator.onLine);
    }, []);
    return (
        <>
            <ContextAPI />
        </>
    );
}
