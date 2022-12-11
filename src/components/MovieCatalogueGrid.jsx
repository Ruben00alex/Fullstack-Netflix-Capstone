import MoviesContext from "../contexts/MoviesContext";
import { useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const MovieCatalogueGrid = ({
  movies,
  setIsMovieInfoModalOpen,
  setChosenMovie,
  moviesLoading,
}) => {


  const { watchList, addToWatchList } = useContext(MoviesContext);

  if (moviesLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center mt-16 bg-slate-700 p-4 w-fit mx-auto ">
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 gap-y-12">
          {movies.map((movie) => (
            <div
              className="aspect-video w-48 lg:w-72  object-cover float-left hover:scale-125  duration-300 hover:brightness-125 hover:cursor-pointer shadow-xl shadow-black/100 "
              style={{
                backgroundImage: `url(${movie.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              key={movie._id}
            >
              {/* gradient overlay */}
              <div
                className="aspect-video w-48 lg:w-72 absolute  object-cover -z-1  bg-gradient-to-b  hover:opacity-0 duration-700 to-black/20 from-transparent"
                onClick={() => {
                  setIsMovieInfoModalOpen(true);
                  setChosenMovie(movie);
                }}
              ></div>
              <button
                className=" bg-slate-700/70 text-white z-[10]  p-4 rounded-full text-center items-center hover:scale-125 hover:bg-red-600/70 duration-300 relative 
            bottom-0 left-0 "
                onClick={() => {
                  addToWatchList(movie);
                }}
              >
                {/* if the movie is already in the watchlist, show a checkmark, otherwise show a plus sign */}
                {watchList.find((movie1) => movie1._id === movie._id) ? (
                  <p className="text-sm my-0">✓</p>
                ) : (
                  <AiOutlinePlus />
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCatalogueGrid;
