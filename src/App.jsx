import { useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";

import { Route, Routes } from "react-router-dom";
import MovieInfoModal from "./components/Modals/MovieInfoModal";
import NavBar from "./components/NavBar";
import AdminPage from "./components/Pages/AdminPage";
import HomePage from "./components/Pages/HomePage";
import LandingPage from "./components/Pages/LandingPage";
import MovieCataloguePage from "./components/Pages/MovieCataloguePage";
import MyListPage from "./components/Pages/MyListPage";

import MoviesContext from "./contexts/MoviesContext";

import { useMoviesData } from "./hooks/useMoviesDataHook";

import { ReactQueryDevtools } from 'react-query/devtools';

function App() {

  const { data: moviesData, isLoading:moviesLoading, error } = useMoviesData();

  let [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  let [isMovieInfoModalOpen, setIsMovieInfoModalOpen] = useState(false);

  let [chosenMovie, setChosenMovie] = useState({});



  let [watchList, setWatchList] = useState([
    {
      _id: 6,
      title: "Schindler's List",
      plot: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution ",
      year: 1993,
      cover:
        "https://occ-0-1007-444.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdhQO6S8ICyAqtSM7d8w-L_l6oO8ze4GRzEmfpO_idOU1EXMgzjrZc5swsBDAdyD0GhlCZSHmezXh2sOqe9aEqoIDXuXkw6IjUEP.jpg?r=9a0",
      runTime: "195 min",
      genre: ["Biography", "Drama", "History"],
      director: "Steven Spielberg",
    },
  ]);
  let [genres, setGenres] = useState([]);

  //here we are using the useEffect hook to set the genres state every time the movies state changes, like when we add a new movie or delete
  useEffect(() => {
    if (!moviesData) return;
    let newGenres = moviesData.reduce((acc, movie) => {
      movie.genre.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);

    console.log(newGenres)
    setGenres(newGenres);
  }, [moviesData]);



  const addToWatchList = (movie) => {
    let newWatchList = [...watchList];
    let movieIndex = newWatchList.findIndex((m) => m._id === movie._id);
    if (movieIndex !== -1) {
      //if the movie is already in the watchlist, remove it
      newWatchList.splice(movieIndex, 1);
      setWatchList(newWatchList);
      return;
    }
    console.log("adding to watchlist", movie);
    setWatchList([...watchList, movie]);
  };


  return (
    <>
      <MoviesContext.Provider
        value={{
          genres,
          addToWatchList,
          watchList,
          setIsMovieModalOpen,
          isMovieModalOpen,
          setIsMovieInfoModalOpen,
          chosenMovie,
          setChosenMovie
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage  />}></Route>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/catalogue" element={<MovieCataloguePage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>

          <Route
            path="/MyList"
            element={<MyListPage watchList={watchList} />}
          ></Route>
        </Routes>

        <Modal
          isOpen={isMovieModalOpen}
          onRequestClose={() => setIsMovieModalOpen(false)}
          className="bg-slate-700/70 text-white absolute w-full  md:w-[80%] h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm"
          overlayClassName="fixed inset-0 bg-black/80 backdrop-filter backdrop-blur-lg z-20"
        >
          <button
            className="absolute top-0 left-0 m-2 p-2 bg-black/50 hover:bg-red-600/70 duration-300 rounded-[100%] w-10 h-10 z-[10000] "
            onClick={() =>{ setIsMovieModalOpen(false);
            setChosenMovie({});
            }
            }
          >
            X
          </button>

          <iframe
            className=" aspect-video w-full mx-0 my-auto  rounded-2xl  content-center z-30
           "
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/${chosenMovie.video}`}
          ></iframe>
        </Modal>

        <Modal
          isOpen={isMovieInfoModalOpen}
          onRequestClose={() => setIsMovieInfoModalOpen(false)}
          // height of 80% of the screen
          className="bg-slate-700/70 text-white absolute lg:w-fit w-full md:w-fit h-fit   mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl  flex flex-col backdrop:bg-black/50 backdrop-blur-sm "
          overlayClassName="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-sm z-20"
        >
          <MovieInfoModal
            movie={chosenMovie}
            setIsMovieInfoModalOpen={setIsMovieInfoModalOpen}
            isAdmin={false}
            setChosenMovie={setChosenMovie}
            setIsMovieModalOpen={setIsMovieModalOpen}
          />
        </Modal>

<ReactQueryDevtools initialIsOpen={false} />
      </MoviesContext.Provider>
    </>
  );
}

export default App;
