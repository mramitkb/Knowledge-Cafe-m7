import profile from '../../assets/resources/profile.jpg'
const Header = () => {
    return (
        <header className='max-w-screen-xl mx-auto'>
            <div className='flex justify-between items-center border-b p-5'>
                <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
                <img src={profile} alt="" />
            </div>
        </header>
    );
};

export default Header;