import Wrapper from "../../../components/wrapper/Wrapper";
import styles from "./addEmployee.module.css";
// import ContactForm from "../../components/contactForm/ContactForm";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

const AddEmployee = () => {
    const [employeeId, setEmployeeId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [jobId, setJobId] = useState(0);
    const [validated, setValidated] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    const [jobRoles, setJobroles] = useState(null);

    const getJobRoles = async () => {
        try {
            const res = await axios.get("http://localhost/project2/server/jobs.php");
            if (res && res.data) {
                setJobroles(res.data);
                setLoaded(true);
            } else {
                setErrored(true);
            }
        } catch (e) {
            setJobroles(null);
            setErrored(true);
        }
    };

    useEffect(() => {
        if (jobRoles == null) getJobRoles();
    }, [jobRoles]);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if (form.checkValidity() === false) {
            e.stopPropagation();
        } else {
            const params = new URLSearchParams();
            params.append("employee_id", employeeId);
            params.append("start_date", startDate);
            params.append("end_date", endDate);
            params.append("job_id", jobId);
            axios
                .post("http://localhost/project2/server/addEmployee.php", params)
                .then(() => {
                    alert(`A new employee has been added!`);
                })
                .catch((e) => {
                    alert("An error occured while adding new employee", e);
                });
            // Swal.fire("Success!", "Thank you for your message. We will contact you via email soon!", "success");
        }

        setValidated(true);
    };

    return (
        <Wrapper error={errored} loaded={loaded} center className={styles.contact}>
            <h1 className={styles.title}>New employee</h1>
            <h2 className={styles.heading}>Please fill out the form below!</h2>
            <div className={styles.form}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="employee_id">
                        <Form.Label>Employee ID</Form.Label>
                        <Form.Control required placeholder="Enter ID" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                        <Form.Control.Feedback type="invalid">Please enter the employee ID.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="start_date">
                        <Form.Label>Starting date</Form.Label>
                        <Form.Control
                            required
                            placeholder="Enter starting date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please enter the starting date.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>Ending date</Form.Label>
                        <Form.Control
                            required
                            placeholder="Enter phone number"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                        <Form.Control.Feedback type="invalid">Please enter the ending date</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Job role</Form.Label>
                        <Form.Select onChange={(e) => setJobId(e.target.value)}>
                            {jobRoles &&
                                jobRoles.map((role, key) => {
                                    return (
                                        <option key={key} value={role.job_id}>
                                            {role.title}
                                        </option>
                                    );
                                })}
                        </Form.Select>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Wrapper>
    );
};

export default AddEmployee;
