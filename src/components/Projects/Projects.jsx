import { useEffect, useState } from "react";
import Project from "../Project/Project";
import {Helmet} from 'react-helmet';


const Projects = () => {
    const [blogs, setBlogs] = useState([]) 

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        
        <div>
            <Helmet>
                <title>SunSt - Our Project</title>
            </Helmet>
            <div className="mx-auto text-center font-bold text-6xl mt-10">
               Our Projects
            </div>

            <div className="grid grid-cols-3 mt-36 gap-8 mx-8">
                {
                    blogs.map(blog => <Project key={blog.id} blog={blog}></Project>)
                }
            </div>
        </div>
    );
};

export default Projects;