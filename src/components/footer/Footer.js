import styles from "./Footer.module.css";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <>
            <div className={styles.footer}>Daniel Raybone ©️ {year}</div>
        </>
    );
};

export default Footer;
