import MovieInfoModal from "../components/Modals/MovieInfoModal";
import MovieCatalogueGrid from "../components/MovieCatalogueGrid";

import { useContext, useState, useEffect } from "react";
import MoviesContext from "../contexts/MoviesContext";

import Modal from "react-modal";

import { useMoviesData, useSaveMovie } from "../hooks/useMoviesDataHook";
import AddMovieModal from "../components/Modals/AddMovieModal";

const AdminPage = () => {

  const { setChosenMovie, setMovies, chosenMovie, watchList, addToWatchList } =
    useContext(MoviesContext);

  const [isAddMovieModalOpen, setIsAddMovieModalOpen] = useState(false);

  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const { data: movies, isLoading, error } = useMoviesData();

  let { mutate: saveMovieMutation } = useSaveMovie();

  const onAddMovie = (movie) => {
    //make the genre an array (separated by commas and remove spaces)
    movie.genre = movie.genre.split(",").map((genre) => genre.trim());

    //turn the youtube link into an embed link
    let youtubeLink = movie.video;
    let youtubeId = youtubeLink.split("v=")[1];
    movie.video = youtubeId;
    console.log(movie.video);

    saveMovieMutation(movie);
    setIsAddMovieModalOpen(false);
  };

  const handleDelete = (movie) => {
    let newMovies = [...movies];
    let movieIndex = newMovies.findIndex((m) => m.id === movie.id);
    newMovies.splice(movieIndex, 1);

    // add the movie to the watchlist if it is in the watchlist (this is a hacky way to do it, but it works)
    let watchListIndex = watchList.findIndex((m) => m.id === movie.id);
    if (watchListIndex !== -1) {
      addToWatchList(movie);
    }

    setMovies(newMovies);
  };

  const handleEdit = (movie) => {
    let newMovies = [...movies];
    let movieIndex = newMovies.findIndex((m) => m.id === movie.id);
    newMovies[movieIndex] = movie;
    setMovies(newMovies);
  };

  if (error) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        {" "}
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-200"></div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center mt-16">
        <button
          className="bg-slate-200 my-auto text-slate-800 font-bold py-2 px-4 mx-auto rounded-full border-2 hover:bg-black hover:text-white hover:border-white duration-300 "
          onClick={() => setIsAddMovieModalOpen(true)}
        >
          Add Movie2
        </button>


        <MovieCatalogueGrid
          movies={movies}
          setIsMovieInfoModalOpen={setIsAdminModalOpen}
          setChosenMovie={setChosenMovie}
        />
      </div>

      <AddMovieModal
        isOpen={isAddMovieModalOpen}
        onClose={() => setIsAddMovieModalOpen(false)}
        onAddMovie={onAddMovie}
      />

      <Modal
        isOpen={isAdminModalOpen}
        onRequestClose={() => setIsAdminModalOpen(false)}
        // height of 80% of the screen
        className="bg-slate-700/70 text-white absolute lg:w-fit w-full h-fit   mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl  flex flex-col backdrop:bg-black/50 backdrop-blur-sm "
        overlayClassName="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-sm z-20"
        ariaHideApp={false}
      >
        <MovieInfoModal
          // handleDelete, handleEdit
          handleDelete={handleDelete}
          handleEdit={() => {}}
          movie={chosenMovie}
          setIsMovieInfoModalOpen={setIsAdminModalOpen}
          isAdmin={true}
          setMovieChosen={setChosenMovie}
        />
      </Modal>
    </>
  );
};

export default AdminPage;
