import { CiBookmark } from "react-icons/ci";

const Post = ({ post, handleSpenTime, handleBookmarkClick }) => {
    const { image, author_image, author_name, post_date, read_time, title } = post;

    return (
        <>
            <div className="mt-4">
                <div className="mb-2">
                    <img className="rounded-xl" src={image} alt="" />
                </div>
                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <div className="w-[50px]">
                            <img className="w-full" src={author_image} alt="" />
                        </div>
                        <div>
                            <h2 className="font-bold">{author_name}</h2>
                            <p>{post_date}</p>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <p>{read_time}</p>
                        <button onClick={() => handleBookmarkClick(title)}><CiBookmark /></button>
                    </div>
                </div>
                <h1 className="text-3xl font-bold">{title}</h1>
                <button onClick={() => { handleSpenTime(read_time) }} className="text-blue-800 font-semibold my-2">Mark as Read</button>
            </div>
        </>
    )
}

export default Post