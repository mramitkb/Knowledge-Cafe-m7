import PropTypes from 'prop-types';
import { FaRegBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddForBookmark, handleMarkAsRead}) => {
    const {id, title, author, author_img, cover_img, hashtags, posted_date, reading_time} = blog;
    return (
        <div>
            <img className='rounded-xl' src={cover_img} alt="" />
            <div>
                {/* author */}
                <div className='py-5 flex items-center justify-between'>
                    <div className='flex items-center gap-5'>
                        <img src={author_img} alt={`Cover picture of the title ${title}`} />
                        <div>
                            <h3 className='text-2xl font-bold'>{author}</h3>
                            <p className='font-semibold text-[#707070]'>{posted_date}</p>
                        </div>
                    </div>
                    {/* time */}
                    <div className='space-x-2'>
                        <span className='text-[#707070] text-lg font-medium'>{reading_time} min read</span>
                        <button onClick={() => handleAddForBookmark(blog)}><FaRegBookmark className='text-red-400'></FaRegBookmark></button>
                    </div>
                </div>
                <h2 className='text-4xl font-bold'>{title}</h2>
                {/* hashtags */}
                <div className='my-4'>
                    <p>
                        {
                            hashtags.map((hashtag, idx) => <span className='ml-3' key={idx}><a href="">{hashtag}</a></span>)
                        }
                    </p>
                </div>
                <button onClick={() => handleMarkAsRead(reading_time, id)}><a className='underline text-[#6047EC] font-semibold' href="#mark">Mark as read</a></button>
            </div>
            <div>
                <hr className='my-8'/>
            </div>
        </div>
    );
};

// PropTypes error fix
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddForBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
}
export default Blog;