import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
// Using npm module doesnt seem to work, not sure why
// Manually added css in head too
// import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@8/src/sweetalert2.js";

const ContactForm = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const params = new URLSearchParams();
            params.append("name", name);
            params.append("email", email);
            params.append("phone", phone);
            params.append("message", message);
            axios.post("http://localhost/project2/server/contact.php", params);
            alert("Thank you for your message. We will contact you via email soon!");
            // Swal.fire("Success!", "Thank you for your message. We will contact you via email soon!", "success");
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Control.Feedback type="invalid">Please enter your email address.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>First name</Form.Label>
                <Form.Control required placeholder="Enter first name" value={name} onChange={(e) => setName(e.target.value)} />
                <Form.Control.Feedback type="invalid">Please enter first name.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone number</Form.Label>
                <Form.Control required placeholder="Enter phone number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <Form.Control.Feedback type="invalid">Please enter your phone number.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    required
                    placeholder="Enter your message to us!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">Please enter a message to send to us.</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactForm;
