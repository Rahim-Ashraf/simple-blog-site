import { useEffect, useState } from "react";
import Post from "./Post";


const Posts = ({handleSpenTime}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <>
        <div className="w-2/3">
        {posts.length}
        {posts.map(post => <Post key={post.title} post={post} handleSpenTime={handleSpenTime} />)}
        </div>
        </>
    )
}

export default Posts