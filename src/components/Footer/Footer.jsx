import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mx-auto pb-5 mt-24">
            <footer className="bg-[#171717] lg:rounded-[35px] pl-4">
                <div className="flex flex-col lg:flex-row justify-around lg:gap-36 pt-20">
                    <div>
                        <img className="h-[36px] w-[150px] text-white mb-7" src="https://wearesunst.com/wp-content/uploads/2023/09/logo.svg" alt="Footer Logo" />
                        <p className="text-[#A7A7A7] text-[17px] outfit font-medium pb-5">Explore our real estate services and discover your dream home.</p>
                    </div>
                    <div className="mr-5 sm:mr-0">
                        <h4 className="text-[26px] anek font-medium text-[#FFFFFF]">Our Newsletter</h4>
                        <div className="relative">
                            <input className="py-4 pr-[10px] pl-4 w-60 md:w-[601px] bg-[#171717]  border-[#A7A7A7] border-[1px] rounded-full placeholder:text-[#A7A7A7] placeholder:font-medium placeholder:text-[18px]" type="email" placeholder="Enter your email..." required />
                            <FaTelegram className="absolute left-48 md:left-[550px] bottom-2.5 w-[41px] h-[41px] duration-150 text-[#FBA968] hover:text-white" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-around pt-20">
                    <ul className="text-[17px] outfit text-[#A7A7A7] font-medium">
                        <li className="text-[#FFFFFF] text-[26px] anek mb-4 font-semibold">Useful Links</li>
                        <li className="pb-4">Home</li>
                        <li className="pb-4">Properties</li>
                        <li className="pb-4">About Us</li>
                        <li className="pb-4">Contact Us</li>
                    </ul>

                    <ul className="text-[17px] outfit text-[#A7A7A7] font-medium">
                        <li className="text-[#FFFFFF] text-[26px] anek mb-4 font-semibold">Services</li>
                        <li className="pb-4">Residential Listings</li>
                        <li className="pb-4">Commercial Properties</li>
                        <li className="pb-4">Property Management</li>
                    </ul>

                    <ul className="text-[17px] outfit text-[#A7A7A7] font-medium">
                        <li className="text-[#FFFFFF] text-[26px] anek mb-4 font-semibold">Company</li>
                        <li className="pb-4">About Our Team</li>
                        <li className="pb-4">Careers</li>
                        <li className="pb-4">Privacy Policy</li>
                    </ul>

                    <div>
                        <div className="flex gap-5">
                            <FaLocationDot className="lg:text-3xl w-14 h-14 p-4 rounded-full bg-[#E1E1E11A]" />
                            <div className="lg:text-[17px] outfit text-[#A7A7A7] font-medium pb-9">
                                <h4 className="text-[#FFFFFF] lg:text-[26px] anek font-semibold">Address</h4>
                                <p>280 Granite Run Drive Suite Hobert, LA 90010, United States</p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <FiPhoneCall className="lg:text-3xl bg-[#E1E1E11A] w-14 h-14 p-4 rounded-full" />
                            <div className="lg:text-[17px] outfit text-[#A7A7A7] font-medium">
                                <h4 className="text-[#FFFFFF] lg:text-[26px] anek font-semibold">Contact Info</h4>
                                <p>(0) 123456789</p>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex flex-col lg:flex-row justify-between mx-16 mt-10 pb-5">
                    <div className="flex gap-3">
                        <FaFacebookF className="w-[35px] h-[35px] text-white rounded-full p-2 bg-[#171717]" />
                        <FaTwitter className="w-[35px] h-[35px] text-white rounded-full p-2 bg-[#171717]" />
                        <FaLinkedinIn className="w-[35px] h-[35px] text-white rounded-full p-2 bg-[#171717]" />
                    </div>
                    <p className="text-[#FFFFFF80] text-[17px] outfit">© 2024 SunSt. All Rights Reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;