// https://eldiario.com/wp-content/uploads/2021/11/619306-bg-full-netflix-grid-v2.desktop.jpg
import {Link} from 'react-router-dom'

const LandingPage = () => {

    return(
        <>
            <div className = "bg-[#141414] w-full h-screen">
                <img
                    src="https://eldiario.com/wp-content/uploads/2021/11/619306-bg-full-netflix-grid-v2.desktop.jpg"
                    alt="netflix"
                    className="object-cover w-full h-screen"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-red-700/30 " />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png "
                        alt="netflix"
                        // blend-mode="color-burn"
                        //make the letters more visible
                        className="w-1/2 object-contain "
                    />
                    <h1 className="text-4xl font-bold text-white mt-4 mx-8 text-center">
                        Unlimited movies, AAAAAs, and more.
                    </h1>
                    <Link to="/home">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg mt-4">
                        Enter
                    </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default LandingPage