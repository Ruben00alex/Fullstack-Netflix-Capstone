import { useContext, useState, useEffect } from "react";
import MovieCarousel from "../MovieCarousel";
import SplashScreen from "../SplashScreen";

import MoviesContext from "../../contexts/MoviesContext";

import { useMoviesData } from "../../hooks/useMoviesDataHook";

const HomePage = () => {
  const { genres, watchList } = useContext(MoviesContext);

  let [movieChosenRandomly, setMovieChosenRandomly] = useState(null);
  const { data: moviesData, isLoading, error } = useMoviesData();

  //take a random movie from the movies array and set it to the movieChosenRandomly state
  useEffect(() => {
    if (moviesData) {
      setMovieChosenRandomly(
        moviesData[Math.floor(Math.random() * moviesData.length)]
      );
    }
    return () => {
      setMovieChosenRandomly(null);
    };
  }, [moviesData]);

  //set a random movie to the movieChosenRandomly state every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMovieChosenRandomly(
        moviesData[Math.floor(Math.random() * moviesData.length)]
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        {" "}
        <div className="">error: {error.message} </div>
      </div>
    );
  }
  if (isLoading) {
    // animated loading spinner, not splash screen
    console.log("loading");
    return (
      <div className="flex justify-center items-center h-screen">
        {" "}
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-200"></div>
      </div>
    );
  }
  return (
    <>
      {movieChosenRandomly ? (
        <SplashScreen movie={movieChosenRandomly} />
      ) : null}
      <div className="flex flex-col ">
        {watchList.length != 0 ? (
          <>
            <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
              My List
            </h2>
            <MovieCarousel movies={watchList} genre="My List" />
          </>
        ) : null}
        {genres.map((genre) => (
          <div className="flex flex-row flex-wrap">
            <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
              {genre}
            </h2>
            <MovieCarousel
              movies={moviesData.filter((movie) => movie.genre.includes(genre))}
              genre={genre}
              key={genre}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
