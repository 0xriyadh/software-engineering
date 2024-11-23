import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "./store/atoms/count";
import { countSelectorForEven } from "./store/atoms/count";

function App() {
    return (
        <div>
            <RecoilRoot>
                <Count />
            </RecoilRoot>
        </div>
    );
}

function Count() {
    console.log("count re-render");
    return (
        <div>
            <CountRenderer />
            <Buttons />
            <ShowIfEven />
        </div>
    );
}

function ShowIfEven() {
    const isEven = useRecoilValue(countSelectorForEven);

    if (isEven) {
        return <div>This is Even</div>;
    } else {
        return <></>;
    }
}

function CountRenderer() {
    const count = useRecoilValue(countAtom);

    return (
        <div>
            <b>{count}</b>
        </div>
    );
}

function Buttons() {
    const setCount = useSetRecoilState(countAtom);
    console.log("buttons re-rendererd");

    return (
        <div>
            <button
                onClick={() => {
                    setCount((count) => count + 1);
                }}
            >
                Increase
            </button>

            <button
                onClick={() => {
                    setCount((count) => count - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}

export default App;
