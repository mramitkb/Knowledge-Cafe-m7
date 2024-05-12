import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    })
    return (
        <div className="md:w-3/4">
            <h2>Blogs: {blogs.length}</h2>

            {/* every blogs */}
            {
                // blogs.map(blog =><Blogs></Blogs>)
            }
        </div>
    );
};

export default Blogs;