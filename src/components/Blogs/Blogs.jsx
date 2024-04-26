import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import {Helmet} from 'react-helmet';


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div>
            <Helmet>
                <title>SunSt - Blogs</title>
            </Helmet>

            <div>
                <h1 className="text-6xl font-bold text-center mt-7">Our Blog</h1>
            </div>

            <div className="grid mt-20 gap-8 mx-8 lg:grid-cols-3">
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;