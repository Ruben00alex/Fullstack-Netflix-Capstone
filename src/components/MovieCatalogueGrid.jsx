
const MovieCatalogueGrid = ({ movies,  setIsMovieInfoModalOpen,setChosenMovie }) => {
  return (
    <div className="flex flex-col items-center mt-16 bg-slate-300 p-4">
      <div className=" mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 gap-y-8 ">
        {movies.map((movie) => (
          <img
            src={movie.cover}
            alt={movie.title}
            className="aspect-video w-48 lg:w-64  object-cover float-left hover:scale-125  duration-300 hover:brightness-50 hover:cursor-pointer shadow-xl shadow-black/100 "
            key={movie.id}
            onClick={() => {
              setIsMovieInfoModalOpen(true);
              setChosenMovie(movie);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieCatalogueGrid;
