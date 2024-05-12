import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {

  //use state for bookmark add
  const [bookmarks, setBookmarks] = useState([])
  // event handler for bookmark
  const handleAddForBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  // reading time add
  const [readingTime, setReadingTime] = useState(0);
  // event handler fro reading time
  const handleMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  return (
    <>
      <Header></Header> 
      <div className="md:flex mt-8 gap-4 max-w-screen-xl mx-auto">
          <Blogs handleAddForBookmark={handleAddForBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
