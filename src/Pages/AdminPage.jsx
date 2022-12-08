import AddMovieModal from "../components/Modals/AddMovieModal";
import MovieInfoModal from "../components/Modals/MovieInfoModal";
import MovieCatalogueGrid from "../components/MovieCatalogueGrid";

import { useState } from "react";
const AdminPage = ({ movies, setIsMovieInfoModalOpen, setChosenMovie, setMovies  }) => {
  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false);

  const onAddMovie = (movie) => {
    let newMovies = [...movies];


    let maxId = Math.max(...newMovies.map((movie) => movie.id));
    movie.id = maxId + 1;

    movie.genre = movie.genre.split(",").map((genre) => genre.trim());

    newMovies.push(movie);

    setMovies(newMovies);
    console.log(movie);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-16">

      <button
        className="bg-slate-200 text-slate-800 font-bold py-2 px-4 mx-auto rounded-full"
        onClick={() => setIsAddMovieModalOpen(true)}
      >
        Add Movie
      </button>
        <MovieCatalogueGrid
          movies={movies}
          setIsMovieInfoModalOpen={setIsMovieInfoModalOpen}
          setChosenMovie={setChosenMovie}
        />
      </div>

      <AddMovieModal
        isOpen={isAddMovieModalOpen}
        onClose={() => setIsAddMovieModalOpen(false)}
        onAddMovie={onAddMovie}
      />
    </>
  );
};

export default AdminPage;
