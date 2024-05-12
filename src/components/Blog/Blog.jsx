import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    console.log(blog)
    const {title, author, author_img, cover_img, hashtags, posted_date, reading_time} = blog;
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
                    <div>
                        <p className='text-[#707070] text-lg font-medium'>{reading_time} min read</p>
                        
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
                <p><a className='underline text-[#6047EC] font-semibold' href="#mark">Mark as read</a></p>
            </div>
            <div>
                <hr className='my-5'/>
            </div>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired
}
export default Blog;