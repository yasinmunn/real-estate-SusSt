
const Blog = ({blog}) => {
    const {image, date, title} = blog;
    return (
        <div>
            <img className="rounded-t-3xl" src={image} alt="#" />
            <div className="p-10 bg-[#FFFFFF] rounded-b-3xl">
                <p className="text-[#6E6E78] text-base outfit font-medium">{date}</p>
                <p className="text-[25px] anek font-semibold text-[#171717] leading-[30px] pt-2 pb-2">{title}</p>
                <p className="text-[14px] text-[#171717] font-medium decoration-2 outfit underline decoration-[#FBA968] hover:text-[#FBA968] duration-200"><a href="">READ MORE</a></p>
            </div>
        </div>
    );
};

export default Blog;
