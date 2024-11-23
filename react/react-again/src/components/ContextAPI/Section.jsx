import { useContext } from "react";
import { LevelContext } from "./LevelContext.jsx";
import PropTypes from "prop-types";

export default function Section({ children }) {
    const level = useContext(LevelContext);

    return (
        <section className="border border-black p-4 m-2">
            <LevelContext.Provider value={level+1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}

Section.propTypes = {
    children: PropTypes.node.isRequired,
};
