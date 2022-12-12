import { useContext } from "react";
import MoviesContext from "../contexts/MoviesContext";
const SplashScreen = ({ movie }) => {
  //use Context instead of passing props
  const { setIsMovieModalOpen, addToWatchList, watchList, setChosenMovie } =
    useContext(MoviesContext);

  return (
    <div className="relative text-white ">
      <img
        src={movie.cover}
        alt={movie.title}
        className="aspect-video w-full mx-auto  object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/90" />
      <div className="top-0 lg:top-1/3  absolute flex-col gap-8 ml-2 lg:ml-8 my-4 p-4">
        {/* max character width of 16 characters */}
        <h1 className="text-2xl lg:text-5xl font-bold my-0 text-white bg-black/50 p-2  rounded-lg w-[16ch]">
          {movie.title} ({movie.year})
        </h1>
        <p className="text-md ">{movie.runTime}</p>
        <p className="text-sm">{movie.genre[0]}</p>
        <p className="text-sm">{movie.director}</p>
        <button
          className={` bg-slate-700 text-white hover:text-black  ${
            watchList.find((item) => item._id === movie._id)
              ? "bg-red-600 hover:bg-slate-900 hover:text-slate-300"
              : "bg-slate-700 hover:bg-red-600"
          } hover:bg-red-600 duration-300 m-4 px-4 py-2 `}
          onClick={() => addToWatchList(movie)}
        >
          {watchList.find((item) => item._id === movie._id)
            ? "Remove from watchlist"
            : "Add to watchlist"}
        </button>
        <button
          className=" bg-black text-white hover:text-black hover:bg-red-600 duration-300 m-4 px-4 py-2  border-2 border-white rounded-lg"
          onClick={() => {
            setIsMovieModalOpen(true);
            setChosenMovie(movie);
          }}
        >
          Play
        </button>
      </div>
    </div>
  );
};
export default SplashScreen;
