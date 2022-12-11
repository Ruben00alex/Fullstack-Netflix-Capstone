import { useContext, useState, useEffect } from "react";
import MovieCarousel from "../components/MovieCarousel";
import SplashScreen from "../components/SplashScreen";

import MoviesContext from "../contexts/MoviesContext";

import { useMoviesData } from "../hooks/useMoviesDataHook";

const HomePage = () => {
  const {
    genres,
    watchList,
  } = useContext(MoviesContext);


  const {data: moviesData , isLoading, error} = useMoviesData();


  //take a random movie from the movies array and set it to the movieChosenRandomly state

  
  let [movieChosenRandomly, setMovieChosenRandomly] = useState(moviesData[Math.floor(Math.random() * moviesData.length)])

  


  //set a random movie to the movieChosenRandomly state every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMovieChosenRandomly(moviesData[Math.floor(Math.random() * moviesData.length)]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);




  if (isLoading) {
    // animated loading spinner, not splash screen
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <>
    <SplashScreen movie={movieChosenRandomly} />
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
