import { useEffect, useState } from "react";
import Estate from "./Estate";

const Estates = () => {
    const [estates, setEstates] = useState([])

    useEffect(() => {
        fetch('estate.json')
            .then(res => res.json())
            .then(data => setEstates(data))
    }, [])
    return (
        <div className="pt-28 mx-auto container">
            <div className="flex flex-col lg:flex-row items-center justify-between pt-10 pb-10">
                <div className="w-full">
                    <h5 className="text-[#FBA968] text-base font-medium outfit mb-5">OUR MISSION</h5>
                    <h1 className="text-[#171717] anek text-[50px] font-semibold leading-[56px]">Empowering lives through <br /> exceptional real estate</h1>
                </div>
                <div>
                    <p className="text-[#6E6E78] text-[17px] font-medium mb-5">Discover our range of residential properties tailored to meet your needs and preferences. Our commitment is to provide outstanding service and support throughout your real estate journey.</p>
                    <p className="text-[#171717] text-[14px] outfit font-semibold underline decoration-orange-400 decoration-2 hover:text-[orange]">EXPLORE OUR LISTINGS</p>
                </div>

            </div>

            <div className="flex flex-col lg:flex-row gap-8 mt-10">
                {
                    estates.map(estate => <Estate key={estate.id} estate={estate}></Estate>)
                }
            </div>
        </div>
    );
};

export default Estates;