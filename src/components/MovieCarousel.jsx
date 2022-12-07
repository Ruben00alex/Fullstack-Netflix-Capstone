import { useEffect,useState } from "react";

const MovieCarousel = ({ movies, genre }) => {
  //movies is an array of objects with movies of one genre
  //genre is a string with the genre name 
  //idFromGenre is a string with the genre name in lowercase  without spaces + "Carousel" 
  const idFromGenre = genre.toLowerCase().replace(" ", "") + "Carousel";


  return (
    <div
      className="flex flex-row items-center h-fit mx-auto px-2 w-full  my-4 gap-2 overflow-x-scroll md:overflow-hidden  overflow-y-hidden relative duration-500 py-6 bg-slate-800/40 "
      id={idFromGenre}
    >
      <button
        id={idFromGenre + "LeftButton"}
        className="sticky left-0  bg-slate-700/70 text-white  px-4 py-10 z-10  hover:bg-red-600/70 duration-300 hidden"
        onClick={() => {
            document.getElementById(idFromGenre).scrollLeft -= 200;

          //if the scroll is less than 0, set it to 0 and hide the button
          if (document.getElementById(idFromGenre).scrollLeft <= 0) {
            document.getElementById(idFromGenre + "LeftButton").style.display =
              "none";
          }
        }}
      >
        {"<"}
      </button>

      {movies.map((movie) => (
        <img
          src={movie.cover}
          alt={movie.title}
          // make pointer when hover
          className="aspect-video w-48 lg:w-64  object-cover float-left hover:scale-125  duration-300 hover:brightness-50 hover:cursor-pointer shadow-xl shadow-black/100 "
          key={movie.title}
        />
      ))}

      <button
        id={idFromGenre + "rightButton"}
        className="sticky right-0  bg-slate-700/70 text-white px-4 py-10 z-10 hover:bg-red-600/70 duration-300 float-right ml-auto"
        onClick={() => {
            document.getElementById(idFromGenre + "LeftButton").style.display =
            "block";
            document.getElementById(idFromGenre).scrollLeft += 200;

        }}
      >
        {">"}
      </button>
    </div>
  );
};

export default MovieCarousel;
