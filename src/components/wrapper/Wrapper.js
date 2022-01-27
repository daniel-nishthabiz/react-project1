import styles from "./Wrapper.module.css";

const Wrapper = ({ children, className }) => {
    // .trim() to make the class names look nicer in the html
    // nothing else :)
    return <div className={`${styles.wrapper} ${className}`.trim()}>{children}</div>;
};

export default Wrapper;
