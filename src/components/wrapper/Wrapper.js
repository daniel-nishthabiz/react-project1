import { useEffect } from "react";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children, className, error = false, loaded = true }) => {
    // .trim() to make the class names look nicer in the html
    // nothing else :)
    useEffect(() => {
        error && console.log("Changing to error page, error has occurred", error);
    }, [error]);
    return (
        <div className={`${styles.wrapper} ${className ?? ""}`.trim()}>
            {/* If errored show error occured */}
            {/* ir not errored and loaded show children */}
            {/* else show loading page */}
            {!error ? loaded ? children : <p>loading</p> : <p>An error has occured.</p>}
        </div>
    );
};

export default Wrapper;
