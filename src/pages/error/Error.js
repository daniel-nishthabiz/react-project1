import styles from "./Error.module.css";

const Contact = ({ message }) => {
    return <div className={styles.error}>{message ?? "Something went wrong :("}</div>;
};

export default Contact;
