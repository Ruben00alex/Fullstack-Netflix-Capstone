import MoviesContext from "../contexts/MoviesContext";
import { useContext } from "react";
import { AiOutlinePlus, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";

const MovieCatalogueGrid = ({
  movies,
  setIsMovieInfoModalOpen,
  setChosenMovie,
  moviesLoading,
  editMovie,
  isAdmin,
  handleDelete,
  deleteMutationLoading,
}) => {
  const { watchList, addToWatchList } = useContext(MoviesContext);

  if (moviesLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="flex flex-col items-center mt-16  p-4 w-fit mx-auto ">
        <div className=" mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-2 xl:gap-2 gap-y-12">
          {movies.map((movie) => (
            <div
              className="aspect-video w-36 lg:w-56 2xl:w-72 object-cover float-left hover:scale-125 hover:z-[2sdsadasdasdsadsdsad0]  duration-300 hover:brightness-125 hover:cursor-pointer shadow-xl shadow-black/100 "
              style={{
                backgroundImage: `url(${movie.cover})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              key={movie._id}
            >
              {/* gradient overlay */}
              <div
                className="aspect-video w-36 lg:w-56 2xl:w-72 absolute  object-cover -z-1  bg-gradient-to-b  hover:opacity-0 duration-700 to-black/20 from-transparent"
                onClick={() => {
                  setChosenMovie(movie);
                  setIsMovieInfoModalOpen(true);
                }}
              ></div>
              <div className="flex flex-row">
                {isAdmin ? (
                  <>
                    <button
                      className=" bg-slate-700/70 text-white z-[10]  p-4 rounded-full text-center items-center hover:scale-125 hover:bg-red-600/70 duration-300 relative bottom-0 right-0 "
                      enabled={!deleteMutationLoading}
                      onClick={() => {
                        handleDelete(movie._id);
                      }}
                    >
                      <AiOutlineDelete />
                    </button>

                    <button
                      className=" bg-slate-700/70 text-white z-[10]  p-4 rounded-full text-center items-center hover:scale-125 hover:bg-red-600/70 duration-300 relative bottom-0 left-0 "
                      onClick={() => {
                        editMovie(movie._id);
                      }}
                    >
                      <AiOutlineEdit />
                    </button>
                  </>
                ) : (
                  <button
                    className=" bg-slate-700/70 text-white z-[10]  p-4 rounded-full text-center items-center hover:scale-125 hover:bg-red-600/70 duration-300 relative bottom-0 left-0 "
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieCatalogueGrid;
