// play icon from react-icons
import { AiFillPlayCircle } from "react-icons/ai";
// add icon from react-icons
import { AiOutlinePlus } from "react-icons/ai";

//delete icon from react-icons
import { AiOutlineDelete } from "react-icons/ai";

// check icon from react-icons
import { useContext } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import MoviesContext from "../../contexts/MoviesContext";

const MovieInfoModal = ({
  movie,
  isAdmin,
  setIsMovieInfoModalOpen,
  setIsMovieModalOpen,
  handleEdit
}) => {

  const { addToWatchList, watchList } = useContext(MoviesContext);
  return (
    <>
      <div className=" w-full h-full mx-auto bg-black/50 z-[10000]">
        <button
          className="absolute top-0 left-0 m-2 p-2 bg-black/50 hover:bg-red-600/70 duration-300 rounded-[100%] w-10 h-10 z-[10000] "
          onClick={() => setIsMovieInfoModalOpen(false)}
        >
          X
        </button>
        <div className="flex flex-col items-left">
          {/* place button in the middle of the image */}
          <img
            className="aspect-video w-full mx-auto  object-cover "
            src={movie.cover}
            alt={movie.title}
          />

          <div className="flex flex-col items-left  gap-2 p-4">
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-2xl lg:text-5xl font-bold my-0 text-white bg-black/50 p-2  rounded-lg w-[16ch]">
                {movie.title} ({movie.year})
              </h1>
              {/* edit button */}
              {isAdmin ? ( // if admin is true then show the edit button instead of the play button
                <button
                  className="bg-black/50 hover:bg-red-600/70 duration-300 rounded-[100%]   z-[10000]  w-16 h-16 "
                  onClick={() => {
                    handleEdit(movie._id)
                  }}
                >
                  Edit
                </button>
              ) : (
                <button
                  className="    bg-black/50 hover:bg-red-600/70 duration-300 rounded-[100%]  z-[10000] "
                  onClick={() => {
                    setIsMovieInfoModalOpen(false);
                    setIsMovieModalOpen(true);
                  }}
                >
                  <AiFillPlayCircle className="text-4xl text-white m-auto w-16 h-16" />
                </button>
              )}

              <button
                className={`    bg-black/50 hover:bg-red-600/70 duration-300 rounded-[100%]  z-[10000] `}
              >
                {isAdmin ? (
                  <AiOutlineDelete
                    className="text-4xl text-white m-auto w-16 h-16"
                    onClick={() => {
                      handleDelete(movie);
                      setIsMovieInfoModalOpen(false);
                    }}
                  />
                ) : watchList.find((item) => item._id === movie._id) ? (
                  <AiOutlineCheck
                    className="text-4xl text-white m-auto w-16 h-16"
                    onClick={() => addToWatchList(movie)}
                  />
                ) : (
                  <AiOutlinePlus
                    className="text-4xl text-white m-auto w-16 h-16"
                    onClick={() => addToWatchList(movie)}
                  />
                )}
              </button>
            </div>

            <p className="text-md ">{movie.runTime}</p>
            <p className="text-md max-w-[45ch] ">{movie.plot}</p>
            <p className="text-sm">
              {movie.genre.map((genre) => genre + ", ")}
            </p>
            <p className="text-sm">{movie.director}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfoModal;
