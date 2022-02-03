import { Routes, Route } from "react-router-dom";
import AddEmployee from "./add/Add";
import List from "./list/List";
import View from "./view/View";

const EmployeeRouter = () => {
    return (
        <Routes>
            <Route path={`/add`} element={<AddEmployee />} />
            <Route path={`/view/:id`} element={<View />} />
            <Route path={`/list`} element={<List />} />
        </Routes>
    );
};

export default EmployeeRouter;
