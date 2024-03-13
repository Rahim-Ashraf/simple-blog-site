import profile from '../assets/images/profile.png'

const Header = () => {
    return (
        <>
            <div className='mb-4'>
                <div className="flex justify-between my-2">
                    <h1 className="text-4xl font-semibold">Simple React Blog Site</h1>
                    <img src={profile} alt="" />
                </div>
                <hr />
            </div>
        </>
    )
}

export default Header