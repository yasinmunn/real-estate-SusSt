import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
    const { id,
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image, } = estate;
    return (
        <div>
            <div className="relative mx-auto w-full">
                <a href="#" className="relative inline-block w-full transform transition-transform duration-300 ease-in-out hover:-translate-y-2">
                    <div className="rounded-lg bg-white p-4 shadow">
                        <div className="relative flex h-52 justify-center overflow-hidden rounded-lg">
                            <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                                <div className="absolute inset-0 bg-black bg-opacity-80">
                                    <img src={image} alt={estate_title} />
                                </div>
                            </div>
                            <span className="absolute top-0 right-2 z-10 mt-3 ml-3 inline-flex select-none rounded-sm bg-[#1f93ff] px-2 py-1 text-xs font-semibold text-white">{segment_name}</span>
                            <span className="absolute top-0 left-0 z-10 mt-3 ml-3 inline-flex select-none rounded-lg bg-transparent px-3 py-2 text-lg font-medium text-white"> <i className="fa fa-star"></i> </span>
                        </div>
                        <div className="mt-4">
                            <h2 className="line-clamp-1 text-2xl font-medium text-gray-800 md:text-lg" title={location}>{estate_title}</h2>
                            <p className="text-[#F6971D] mt-2 inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                                <span className="text-sm uppercase pb-4"> {status === 'sale' ? '' : 'Rent'} </span>
                                <span  className="text-2xl">{price}</span> <br/> {area}/Sqft
                            </p>
                        </div>
                        <div className="mt-4">
                            <p className="line-clamp-1 mt-2 text-lg text-gray-800">{description}</p>
                        </div>
                        <div className="justify-center ite">
                            <div className="mt-4 flex space-x-3 overflow-hidden rounded-lg px-1 py-1">
                                {facilities.map((facility, index) => (
                                    <p key={index} className="flex items-center font-medium text-gray-800">
                                        {facility}
                                    </p>
                                ))}
                            </div>
                            
                        </div>
                        <div className="mt-8 text-right">
                                <Link to={`/estate/${id}`}><button className="py-2.5 px-5 bg-[#F6971D] text-white rounded-lg">View Property Details</button></Link>
                            </div>
                    </div>
                    
                </a>
            </div>
        </div>
    );
};

export default Estate;