import Posts from './Components/Posts'
import Header from './Components/Header'
import BookMarks from './Components/Bookmarks'
import SpendTime from './Components/SpendTime'
import { useState } from 'react'


function App() {
  const [spentTime, setSpentTime] = useState(0)
  const [bookmarkes, setBookmarks] = useState([])
  const handleSpenTime = (read_time) => {
    const parseIntReadTime = parseInt(read_time)
    setSpentTime(spentTime + parseIntReadTime)
  }
  const handleBookmarkClick = (tittle)=>{
    if(!bookmarkes.includes(tittle)){
      setBookmarks([...bookmarkes, tittle])
    }
  }

  return (
    <>
      <div className='max-w-[1280px] mx-auto'>
        <Header />
        <div className='flex gap-4'>
          <div className="w-2/3">
            <Posts handleSpenTime={handleSpenTime} handleBookmarkClick={handleBookmarkClick} />
          </div>
          <div className='w-1/33'>
            <SpendTime spentTime={spentTime} />
            <BookMarks bookmarkes={bookmarkes} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
