import { useState } from "react";

const Project = ({blog}) => {
    const [isHovered, setIsHovered] = useState(false);

    const {image, project_title, project_category} = blog;

    return (
        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img className="rounded-3xl opacity-100 block duration-4000" src={image} alt="#" />
        {isHovered && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center duration-3000">
                <h1 className="bg-[#171717] bg-opacity-50 w-full h-full rounded-3xl text-white p-4 text-center pt-36 text-[28px] outfit font-semibold leading-[30px]">{project_title} <br /> <span className="text-[17px] font-medium">{project_category}</span></h1>
            </div>
        )}
        </div>

    );
};

export default Project;