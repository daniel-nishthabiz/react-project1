import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import styles from "./InfoCard.module.css";
import { LinkContainer } from "react-router-bootstrap";

const ButtonLink = ({ text, ...rest }) => {
    return (
        <Button variant="primary" {...rest}>
            {text}
        </Button>
    );
};

const InfoCard = ({ title, text, button, buttonHref, img }) => {
    return (
        <Card className={styles.card}>
            {img && <Card.Img className={styles.img} variant="top" src={img} />}
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                {button &&
                    (buttonHref ? (
                        <LinkContainer to={buttonHref}>
                            <ButtonLink text={button} href={buttonHref} />
                        </LinkContainer>
                    ) : (
                        <ButtonLink text={button} />
                    ))}
            </Card.Body>
        </Card>
    );
};

export default InfoCard;
