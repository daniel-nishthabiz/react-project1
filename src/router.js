import { Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import Layout from "./components/layout/Layout";
// import View from "./pages/employee/view/View";
import EmployeeRouter from "./pages/employee";

const Router = () => {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/not-added" element={<Error message={"Page not implemented"} />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/employee/*" element={<EmployeeRouter />} />
                <Route path="*" element={<Error message={"404 Not found"} />} />
            </Routes>
        </Layout>
    );
};

export default Router;
