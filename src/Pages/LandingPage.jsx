// https://eldiario.com/wp-content/uploads/2021/11/619306-bg-full-netflix-grid-v2.desktop.jpg
import {Link} from 'react-router-dom'

const LandingPage = () => {

    return(
        <>
            <div className = "bg-[#141414] w-full h-screen">
                {/* full screen image */}
                <img
                    src="https://eldiario.com/wp-content/uploads/2021/11/619306-bg-full-netflix-grid-v2.desktop.jpg"
                    alt="netflix"
                    className="object-cover w-full h-screen"
                />
                {/* gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent to-black/70" />
                {/* content */}
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                        alt="netflix"
                        className="w-1/4"
                    />
                    <h1 className="text-4xl font-bold text-white mt-4 mx-8 text-center">
                        Unlimited movies, TV shows, and more.
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