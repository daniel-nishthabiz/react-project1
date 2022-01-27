import Wrapper from "../../components/wrapper/Wrapper";
import styles from "./Contact.module.css";
import ContactForm from "../../components/contactForm/ContactForm";

const Contact = () => {
    return (
        <Wrapper center className={styles.contact}>
            <h1 className={styles.title}>Contact</h1>
            <h2 className={styles.heading}>Leave us a message below and will get get back in touch with you via email!</h2>
            <div className={styles.form}>
                <ContactForm />
            </div>
        </Wrapper>
    );
};

export default Contact;
