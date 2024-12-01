import useDimensions from "./hooks/useDimensions.jsx";

export default function Page() {
    const dimensions = useDimensions();

    return (
        <>
            <h1>Window Dimensions</h1>
            <p>Width: {dimensions.width}</p>
            <p>Height: {dimensions.height}</p>
        </>
    );
}
