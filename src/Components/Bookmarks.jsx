const BookMarks = ({ bookmarkes }) => {

    return (
        <>
            <div className="bg-gray-100 mt-4 rounded-lg p-4">
                <h2 className="font-bold text-xl">Bookmarked Blogs: <span></span></h2>
                <div className="grid gap-2">
                    {bookmarkes.map(bookmark => {
                        return <p key={bookmark} className="bg-white rounded-lg p-2">{bookmark}</p>
                    })}
                </div>
            </div>
        </>
    )
}

export default BookMarks