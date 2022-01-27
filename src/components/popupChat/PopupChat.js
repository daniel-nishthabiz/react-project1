import styles from "./PopupChat.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "../contactForm/ContactForm";
const PopupChat = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = (e) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <div className={styles.popup}>
            <div
                className={styles.popupMenu}
                style={{
                    display: open ? "block" : "none",
                }}
            >
                <div className={styles.popupPrevMessages}>
                    We are not available right now, please leave your question and email below and we will get in touch.
                </div>
                <div className={styles.popupChat}>
                    <ContactForm />
                </div>
            </div>
            <div className={styles.popupBtn} onClick={handleOpen}>
                <FontAwesomeIcon className={styles.icon} icon={open ? "times" : "comment"} />
            </div>
        </div>
    );
};

export default PopupChat;
