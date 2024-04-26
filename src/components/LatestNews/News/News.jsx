
const News = ({ news }) => {
    const { date, category, title, image } = news;

    return (
        <div className=" mt-10">
            <div className="relative">
                <img className="w-[325px] h-[370px] rounded-xl " src={image} alt="#" />
                <div className="">
                    <p className="absolute bottom-28 ml-16 text-[#FBA968] text-center  text-[16px] outfit font-medium ">{date} - {category}</p>
                    <p  className="absolute bottom-7 text-[#FFFFFF] text-[24px] anek font-semibold text-center">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default News;