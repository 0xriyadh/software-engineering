import PropTypes from "prop-types";
import { memo, useState } from "react";

function ReRender() {
    const [title, setTitle] = useState("My name is Mahadi");
    const changeTitle = () => {
        setTitle("Yo, My name is RIYADH");
    };
    return (
        <>
            <button onClick={changeTitle}>Change Title</button>
            <Header title={title} />
            <Header title={`Yo static title 1`} />
            <Header title={`Yo static title 2`} />
            <Header title={`Yo static title 3`} />
            <Header title={`Yo static title 4`} />
        </>
    );
}

const Header = memo(function Header({ title }) {
    console.log(`Header rendered with ${title}`);
    return <h1>{title}</h1>;
});

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ReRender;
