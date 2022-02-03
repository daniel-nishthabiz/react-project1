import { useEffect, useState } from "react";
import axios from "axios";
import Wrapper from "../../../components/wrapper/Wrapper";
import InfoCard from "../../../components/infoCard/InfoCard";
import styles from "./List.module.css";
const List = () => {
    const [employees, setEmployees] = useState([]);
    const [errored, setErrored] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost/project2/server/getEmployees.php")
            .then((res) => {
                setLoaded(true);
                setEmployees(res.data);
            })
            .catch((e) => {
                setErrored(true);
            });
    }, []);

    return (
        <Wrapper error={errored} loaded={loaded}>
            <div className={styles.employees}>
                {employees &&
                    employees.length > 0 &&
                    employees.map((employee) => {
                        const { first_name, last_name, employee_id, job_id } = employee;
                        return (
                            <InfoCard
                                key={employee_id}
                                title={`${first_name} ${last_name}`}
                                text={
                                    <>
                                        <p>Job ID: {job_id} </p>
                                        <p>Employee ID: {employee_id}</p>
                                    </>
                                }
                                button={"View and edit"}
                                buttonHref={`/employee/view/${employee_id}`}
                            />
                        );
                    })}
            </div>
        </Wrapper>
    );
};

export default List;
