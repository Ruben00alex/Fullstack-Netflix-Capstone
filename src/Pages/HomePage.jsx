import MovieCarousel from "../components/MovieCarousel";
import SplashScreen from "../components/SplashScreen";
import { useEffect, useState } from "react";
const HomePage = ( { movies, genres,setIsMovieModalOpen,setIsMovieInfoModalOpen,setChosenMovie}) => {
    let [movieChosenRandomly, setMovieChosenRandomly] = useState(movies[Math.floor(Math.random() * movies.length)])

    return (
    <div  className="flex flex-col ">
      <SplashScreen

        movie={movieChosenRandomly}
        setIsMovieModalOpen={setIsMovieModalOpen}
      />

      <div className="flex flex-col ">
        {genres.map((genre) => (
          <>
            <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
              {genre}
            </h2>
            <MovieCarousel
              movies={movies.filter((movie) => movie.genre.includes(genre))}
              genre={genre}
              key={genre}

              setIsMovieInfoModalOpen={setIsMovieInfoModalOpen}
              setChosenMovie={setChosenMovie}

            />
          </>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
