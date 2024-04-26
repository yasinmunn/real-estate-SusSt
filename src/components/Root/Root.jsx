import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Outlet} from 'react-router-dom'

const Root = () => {
    return (
        <div className="bg-gray-100">
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;