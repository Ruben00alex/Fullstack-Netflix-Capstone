import { useState, useEffect } from "react";
import Modal from "react-modal/lib/components/Modal";
import FuzzySearch from "fuzzy-search";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import MovieCataloguePage from "./Pages/MovieCataloguePage";
import MovieInfoModal from "./components/Modals/MovieInfoModal";
import AdminPage from "./Pages/AdminPage";
import MyListPage from "./Pages/MyListPage";

import MoviesContext from "./contexts/MoviesContext";

function App() {
  let [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  let [isMovieInfoModalOpen, setIsMovieInfoModalOpen] = useState(false);
  // 20 movies
  let [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
      plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      year: 1972,
      cover:
        "https://www.desktopbackground.org/download/1280x720/2013/10/12/653194_the-godfather-wallpapers_1280x800_h.jpg",
      runTime: "175 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
    },
    {
      id: 2,
      title: "The Shawshank Redemption",
      plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",

      year: 1994,
      cover:
        "https://vmndims.binge.com.au/api/v2/img/5e72adc1e4b09b84ec6be3c7-1584573892104?location=tile&imwidth=1280",
      runTime: "142 min",
      genre: ["Prison", "Drama"],
      director: "Frank Darabont",
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      plot: "The early life and career of Vito Corleone in 1920s New York is portrayed while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      year: 1974,
      cover: "https://wallpapercave.com/wp/wp4119161.jpg",
      runTime: "202 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
    },
    {
      id: 4,
      title: "The Dark Knight",
      plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      year: 2008,
      cover:
        "https://i1.wp.com/www.sinembargo.mx/wp-content/uploads/2018/07/the-dark-knight.jpg?fit=1100%2C580&quality=80&strip=all&ssl=1",
      runTime: "152 min",
      genre: ["Action", "Crime", "Drama", "Thriller"],
      director: "Christopher Nolan",
    },
    {
      id: 5,
      title: "12 Angry Men",
      plot: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      year: 1957,
      cover: "https://i.ytimg.com/vi/2L4IhbF2WK0/maxresdefault.jpg",
      runTime: "96 min",
      genre: ["Crime", "Drama"],
      director: "Sidney Lumet",
    },
    {
      id: 6,
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

  let [watchList, setWatchList] = useState([
    {
      id: 6,
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
    let newGenres = movies.reduce((acc, movie) => {
      movie.genre.forEach((genre) => {
        if (!acc.includes(genre)) {
          acc.push(genre);
        }
      });
      return acc;
    }, []);

    setGenres(newGenres);
  }, [movies]);

  let [chosenMovie, setChosenMovie] = useState({});

  const addToWatchList = (movie) => {
    let newWatchList = [...watchList];
    let movieIndex = newWatchList.findIndex((m) => m.id === movie.id);

    if (movieIndex !== -1) {
      //if the movie is already in the watchlist, remove it
      newWatchList.splice(movieIndex, 1);
      setWatchList(newWatchList);
      return;
    }

    console.log("adding to watchlist", movie);

    setWatchList([...watchList, movie]);
  };

  let [isAdmin, setIsAdmin] = useState(false);

  return (
    <>
      <MoviesContext.Provider
        value={{
          movies,
          setMovies,
          genres,
          addToWatchList,
          watchList,
          setIsMovieModalOpen,
          isMovieModalOpen,
          setIsMovieInfoModalOpen,
          chosenMovie,
          setChosenMovie,
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
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
          className="bg-slate-700/70 text-white absolute w-[95%] h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm"
          overlayClassName="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-sm z-20"
        >
          <button
            className="absolute top-0 left-0 m-2 p-2 bg-black/50 hover:bg-red-600/70 duration-300 rounded-[100%] w-10 h-10 z-[10000] "
            onClick={() => setIsMovieModalOpen(false)}
          >
            X
          </button>

          <iframe
            className=" aspect-video w-full mx-0 my-auto  rounded-2xl  content-center z-30
           "
            title="Youtube player"
            sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
            src={`https://youtube.com/embed/NmzuHjWmXOc?autoplay=1`}
          ></iframe>
        </Modal>

        <Modal
          isOpen={isMovieInfoModalOpen}
          onRequestClose={() => setIsMovieInfoModalOpen(false)}
          // height of 80% of the screen
          className="bg-slate-700/70 text-white absolute lg:w-fit w-full h-fit   mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl  flex flex-col backdrop:bg-black/50 backdrop-blur-sm "
          overlayClassName="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-sm z-20"
        >
          <MovieInfoModal
            // movie,
            // setIsMovieInfoModalOpen,
            // isAdmin,
            // handleDelete,
            // handleAdd,
            // isMovieInfoModalOpen
            movie={chosenMovie}
            setIsMovieInfoModalOpen={setIsMovieInfoModalOpen}
            isAdmin={false}
          />
        </Modal>
      </MoviesContext.Provider>
    </>
  );
}

export default App;
