import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/4 bg-gray-100 p-4 rounded-xl space-y-4">
            <h3 className='text-2xl font-bold text-[#6047EC] bg-[#EFEDFC] border-2 p-2 rounded-lg border-[#6047EC]'>Spent time on read: <span>{readingTime}</span> min</h3>
            <h2 className='text-xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {/* add to the bookmark jsx */}
            {
                bookmarks.map((bookmark, idx)=><Bookmark 
                    key={idx} 
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;