import { useEffect, useState } from "react";
import Post from "./Post";


const Posts = ({handleSpenTime, handleBookmarkClick}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
        <div>
        {posts.length}
        {posts.map(post => <Post key={post.title} post={post} handleSpenTime={handleSpenTime} handleBookmarkClick={handleBookmarkClick} />)}
        </div>
        </>
    )
}

export default Posts