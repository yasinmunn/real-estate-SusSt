import { useEffect, useState } from "react";
import News from "./News/News";

const LatestNews = () => {
    const [newses, setNewses] = useState([])

    useEffect(() => {
        fetch('latestnews.json')
        .then(res => res.json())
        .then(data => setNewses(data))
    },[])
    return (
        <div className="mt-24">
            <h3 className="text-[#FBA968] text-center text-[16px] font-medium outfit pb-3">EXPLORE NEWS WITH US</h3>
            <h1 className="text-[50px] text-center anek font-semibold text-[#171717]">Latest News and Articles</h1>

            <div className="flex flex-col lg:flex-row justify-center gap-5">
                {
                    newses.map(news => <News key={news.id} news={news}></News>)
                }
            </div>
        </div>
    );
};

export default LatestNews;