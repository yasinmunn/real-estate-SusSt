import { useLoaderData, useParams, Link } from 'react-router-dom';

const EstateDetails = () => {
    const estates = useLoaderData();
    const { id } = useParams();
    const estate = estates.find(estate => estate.id === parseInt(id));

    if (!estate) {
        return <div>Loading...</div>; // Handle case where estate is not found
    }

    const {
        estate_title,
        segment_name,
        description,
        price,
        status,
        area,
        location,
        facilities,
        image,
        button_text,
    } = estate;

    return (
        <div className="flex mx-auto container max-h-screen justify-center items-center">
            <div className="flex items-center gap-10 border-0 p-10 bg-white rounded-3xl">
                <div className="w-1/2">
                    <img className="w-full h-auto mb-8 rounded-lg" src={image} alt={estate_title} />
                    
                </div>
                <div className="w-1/2">
                <p className="text-4xl font-semibold text-gray-900 mb-4">{estate_title}</p>
                    <p className="text-lg text-gray-700 mb-6">{description}</p>
                    
                    <p className="text-lg text-gray-800 mb-4"><strong>Segment:</strong> {segment_name}</p>
                    <p className="text-lg text-gray-800 mb-4"><strong>Price:</strong> {price}</p>
                    <p className="text-lg text-gray-800 mb-4"><strong>Status: </strong>{status}</p>
                    <p className="text-lg text-gray-800 mb-4"><strong>Area:</strong> {area}</p>
                    <p className="text-lg text-gray-800 mb-4"><strong>Location:</strong> {location}</p>
                    <p className="text-lg text-gray-800 mb-4"><strong>Facilities:</strong></p>
                    <ul className="list-disc pl-6">
                        {facilities.map((facility, index) => (
                            <li key={index} className="text-lg text-gray-700">{facility}</li>
                        ))}
                    </ul>
                    <Link to="/">
                        <button className="py-3 px-6 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-600">
                            {button_text}
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EstateDetails;
