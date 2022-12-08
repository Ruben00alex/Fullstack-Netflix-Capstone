import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` z-[20] w-full top-0 fixed header ${
        isScrolled && "bg-[#141414] "
      }`}
    >
      {/* tailwind classes */}
      <div className=" px-4  h-full">
        <div className=" flex flex-row items-center  py-4">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              alt="netflix"
              className="w-16 md:w-24 ml-0"
            />
          </Link>
          <div className="flex flex-row ml-auto items-center gap-4 bg-[#141414]/60 p-2">
            <Link to="/home">
              <a href="#" className="hover:text-white duration-500">
                Home
              </a>
            </Link>
            <Link to="/catalogue">
              <a href="" className="hover:text-white duration-500">
                Movies
              </a>
            </Link>
            <Link to="/MyList">

            <a href="#" className="hover:text-white duration-500">
              My List
            </a>
            </Link>

            <Link to="/admin">
              <a href="#" className="hover:text-white duration-500">
                Admin
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
