import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import FuzzySearch from "fuzzy-search";

import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
function App() {
  let [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  let [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Godfather",
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
      year: 1974,
      cover: "https://wallpapercave.com/wp/wp4119161.jpg",
      runTime: "202 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
    },
    {
      id: 4,
      title: "The Dark Knight",
      year: 2008,
      cover:
        "https://i1.wp.com/www.sinembargo.mx/wp-content/uploads/2018/07/the-dark-knight.jpg?fit=1100%2C580&quality=80&strip=all&ssl=1",
      runTime: "152 min",
      genre: ["Action", "Crime", "Drama", "Thriller"],
      director: "Christopher Nolan",
    },
  ]);

  //get all the genres from the movies array
  let genres = movies.reduce((acc, movie) => {
    movie.genre.forEach((genre) => {
      if (!acc.includes(genre)) {
        acc.push(genre);
      }
    });
    return acc;
  }, []);

  return (
    <>
    <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/home"
          element={
            <HomePage
              movies={movies}
              genres={genres}
              setIsMovieModalOpen={setIsMovieModalOpen}
              isMovieModalOpen={isMovieModalOpen}
            />
          }
        ></Route>
      </Routes>

      <Modal
        isOpen={isMovieModalOpen}
        onRequestClose={() => setIsMovieModalOpen(false)}
        className="bg-slate-700/70 text-white absolute w-[95%] h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-sm z-20"
      >
        <button
          className="absolute top-0 left-0 m-2 p-2 bg-black/50 hover:bg-red-600/70 duration-300 rounded-lg "
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
    </>
  );
}

export default App;
