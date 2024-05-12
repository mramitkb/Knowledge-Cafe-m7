import PropTypes from 'prop-types';
import Bookmark from './Bookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/4 bg-gray-100 p-4 rounded-xl space-y-4">
            <h2 className='text-xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
            {/* add to the bookmark jsx */}
            {
                bookmarks.map(bookmark=><Bookmark 
                    key={bookmark.id} 
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;