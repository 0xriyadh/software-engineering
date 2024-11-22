import { memo, useState } from "react";
import PropTypes from "prop-types";

const Todo = memo(function Todo(props) {
    console.log(`Todo rendered with ${props.num}`);
    const { num } = props;
    const [count, setCount] = useState(0);
    const [isTrue, setIsTrue] = useState(true);

    return (
        <>
            <h2>
                Todo App {num}; Count: {count};
            </h2>
            <p>Is this true? {isTrue}</p>
            <button onClick={() => setIsTrue((isTrue) => !isTrue)}>
                Change Is True
            </button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </>
    );
});

Todo.propTypes = {
    num: PropTypes.number.isRequired,
};

export default Todo;
