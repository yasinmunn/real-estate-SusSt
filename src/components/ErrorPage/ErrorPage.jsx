import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet';


const ErrorPage = () => {
    return (
        <div className="bg-gray-100">
            <Helmet>
                <title>Zavar - Error Page</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex max-h-screen justify-center items-center text-center">
                <div>
                    <h1 className="text-[100px] font-semibold text-[#171717] outfit">Oops</h1>
                    <p className="text-[#171717] text-[20px] font-medium">404 - PAGE NOT FOUND</p>
                    <p className="text-[16px] text-[#171717] font-medium outfit pb-4">The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable</p>
                    <Link to="/" className="py-3 px-6 outfit font-medium bg-blue-300 text-white rounded-full">GO TO HOMEPAGE</Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;