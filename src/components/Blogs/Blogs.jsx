import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAddForBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    }, [])
    return (
        <div className="md:w-3/4">
            {/* <h2>Blogs: {blogs.length}</h2> */}

            {/* every blogs */}
            {
                blogs.map(blog =><Blog
                     key={blog.id}
                     blog={blog}
                     handleAddForBookmark={handleAddForBookmark}
                     handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

// PropTypes Error fix
Blogs.propTypes ={
    handleAddForBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;