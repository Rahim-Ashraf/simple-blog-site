const SpendTime = ({spentTime})=>{
    return(
        <>
        <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-800">
        <h2 className="text-2xl font-semibold text-indigo-800">Spent time on read: <span>{spentTime}</span> min</h2>
        </div>
        </>
    )
}

export default SpendTime