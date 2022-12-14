import { useEffect, useState, useContext } from "react";
import { AiOutlinePlus } from "react-icons/ai";

import MoviesContext from "../contexts/MoviesContext";
const MovieCarousel = ({ movies, genre }) => {
  const idFromGenre = genre.toLowerCase().replace(" ", "") + "Carousel"; //id which  will be used to scroll the carousel and to hide the left button when the scroll is 0

  const { setIsMovieInfoModalOpen, setChosenMovie, addToWatchList, watchList } =
    useContext(MoviesContext);

  return (
    <div
      className="flex flex-row items-center h-fit mx-auto  w-full  overflow-x-scroll md:overflow-hidden  overflow-y-hidden  duration-500 py-6 bg-slate-800/40 "
      id={idFromGenre}
    >
      <button
        id={idFromGenre + "LeftButton"}
        className="sticky left-0  bg-slate-700/70 text-white  px-4 py-10 z-10  hover:bg-red-600/70 duration-300 hidden"
        onClick={() => {
          document.getElementById(idFromGenre).scrollLeft -= 500;

          //if the scroll is less than 0, the left button will be hidden
          if (document.getElementById(idFromGenre).scrollLeft <= 0) {
            document.getElementById(idFromGenre + "LeftButton").style.display =
              "none";
          }
        }}
      >
        {"<"}
      </button>
      {movies.map((movie) => (
        //make a div with the image and the title inside the
        <>
          <img
            src={movie.cover}
            alt={movie.title}
            // make pointer when hover
            className="aspect-video w-48 lg:w-64 2xl:w-72  object-cover float-left  hover:scale-125 duration-300 hover:brightness-50 hover:cursor-pointer shadow-xl shadow-black/100 "
            key={movie._id}
            onClick={() => {
              setIsMovieInfoModalOpen(true);
              setChosenMovie(movie);
            }}
          />
          <button
            className=" bg-slate-700/70 text-white  group:  m-0 p-4 rounded-full  text-center items-center hover:scale-125 hover:bg-red-600/70 duration-300 relative -bottom-8 right-12"
            onClick={() => {
              addToWatchList(movie);
            }}
          >
            {/* if the movie is already in the watchlist, show a checkmark, otherwise show a plus sign */}
            {watchList.find((movie1) => movie1._id === movie._id) ? (
              <p className="text-sm p-0">✓</p>
            ) : (
              <AiOutlinePlus className="text-sm p-0" />
            )}
          </button>
        </>
      ))}
      <button
        id={idFromGenre + "rightButton"}
        className="sticky right-0  bg-slate-700/70 text-white px-4 py-10 z-10 hover:bg-red-600/70 duration-300 float-right ml-auto"
        onClick={() => {
          document.getElementById(idFromGenre + "LeftButton").style.display =
            "block";
          document.getElementById(idFromGenre).scrollLeft += 500;
        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default MovieCarousel;
