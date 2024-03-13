import Posts from './Components/Posts'
import Header from './Components/Header'
import BookMarks from './Components/Bookmarks'
import SpendTime from './Components/SpendTime'
import { useState } from 'react'


function App() {
  const [spentTime, setSpentTime] = useState(0)
  const handleSpenTime = (read_time) => {
    const parseIntReadTime = parseInt(read_time)
    setSpentTime(spentTime + parseIntReadTime)
  }

  return (
    <>
      <div className='max-w-[1280px] mx-auto'>
        <Header />
        <div className='flex gap-4'>
          <Posts handleSpenTime={handleSpenTime} />
          <div>
            <SpendTime spentTime={spentTime}/>
            <BookMarks />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
