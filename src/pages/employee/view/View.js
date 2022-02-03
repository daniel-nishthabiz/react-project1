import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../../../components/wrapper/Wrapper";
import styles from "./View.module.css";

const View = () => {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);
    const [employee, setEmployee] = useState({});
    let { id: employeeId } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost/project2/server/getEmployees.php?id=" + employeeId)
            .then((res) => {
                setLoaded(true);
                setEmployee(res.data);
            })
            .catch((e) => {
                setErrored(true);
            });
    }, [employeeId]);

    return (
        <Wrapper loaded={loaded} error={errored}>
            <div className={styles.view}>ID: {employeeId}</div>
            {/* {JSON.stringify(employee)} */}
            <div>
                <p>ID: {employee.first_name}</p>
                <p>First Name:{employee.first_name}</p>
                <p>Last Name:{employee.last_name}</p>
                {/* <p>{employee.job_name}</p> */}
            </div>
        </Wrapper>
    );
};

export default View;
