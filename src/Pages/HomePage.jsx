import MovieCarousel from "../components/MovieCarousel";
import SplashScreen from "../components/SplashScreen";
import { useEffect, useState, useContext } from "react";

import MoviesContext from "../contexts/MoviesContext";

const HomePage = () => {
  const {
    movies,
    setMovies,
    genres,
    addToWatchList,
    watchList,
    setIsMovieModalOpen,
    setIsMovieInfoModalOpen,
    setChosenMovie,
  } = useContext(MoviesContext);
  let [movieChosenRandomly, setMovieChosenRandomly] = useState(
    movies[Math.floor(Math.random() * movies.length)]
  );

  return (
    <div className="flex flex-col ">
      <SplashScreen movie={movieChosenRandomly} />

        {watchList.length != 0 ? (
          <>
            <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
              My List
            </h2>
            <MovieCarousel movies={watchList} genre="My List" />
          </>
        )
        : null}
        {genres.map((genre) => (
          <div className="flex flex-row flex-wrap">
            <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
              {genre}
            </h2>
            <MovieCarousel
              movies={movies.filter((movie) => movie.genre.includes(genre))}
              genre={genre}
              key={genre}
            />
          </div>
        ))}
    </div>
  );
};

export default HomePage;
