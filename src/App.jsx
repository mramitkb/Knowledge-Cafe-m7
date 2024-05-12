import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {

  //use state for bookmark add
  const [bookmarks, setBookmarks] = useState([])

  // event handler for bookmark
  const handleAddForBookmark = blog =>{
    console.log(blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <Header></Header> 
      <div className="md:flex mt-8 gap-4 max-w-screen-xl mx-auto">
          <Blogs handleAddForBookmark={handleAddForBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
