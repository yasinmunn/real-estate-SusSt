import { MdOutlineDoubleArrow } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const AboutUs = () => {
    return (
        <div>
            <div className="mt-28 flex flex-col lg:flex-row justify-center gap-8 mx-auto container items-center">
                <div>
                    <h5 className="text-[#FBA968] text-base font-medium outfit mb-5">ABOUT OUR RESIDENTIAL PROPERTIES</h5>
                    <h1 className="text-[#171717] anek text-4xl font-semibold leading-[56px]">Explore Our Residential Real Estate Services</h1>
                    <p className="text-[17px] text-[#6E6E78] font-medium outfit pb-9 pt-3">
                        Discover our range of beautiful residential properties tailored to your needs. We specialize in providing modern and comfortable homes that enhance your quality of life.
                    </p>
                    <ul className="mb-9">
                        <li className="flex items-center text-[#6E6E78] text-[18px] font-medium">
                            <MdOutlineDoubleArrow className="text-[orange] text-3xl" /> Browse through a curated selection of residential homes and apartments.
                        </li>
                        <li className="flex items-center text-[#6E6E78] text-[18px] font-medium">
                            <MdOutlineDoubleArrow className="text-[orange] text-3xl" /> Our properties feature modern amenities and spacious layouts.
                        </li>
                        <li className="flex items-center text-[#6E6E78] text-[18px] font-medium">
                            <MdOutlineDoubleArrow className="text-[orange] text-3xl" /> Find the perfect home that suits your lifestyle and preferences.
                        </li>
                        <li className="flex items-center text-[#6E6E78] text-[18px] font-medium">
                            <MdOutlineDoubleArrow className="text-[orange] text-3xl" /> Contact our team today to schedule a viewing and explore available listings.
                        </li>
                    </ul>

                    <button className="text-white bg-[#171717] py-4 px-9 rounded-full text-[14px] outfit font-medium hover:bg-[#FBA968] duration-200">
                        VIEW RESIDENTIAL PROPERTIES
                    </button>

                </div>
                <img
                    className="w-[660px] h-[575px] rounded-3xl"
                    src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Residential Properties"
                />
            </div>

        </div>
    );
};

export default AboutUs;


// import React, { useRef, useState } from 'react';


// import './styles.css';

// export default function App() {
//   return (
//     <>
//       
//     </>
//   );
// }
