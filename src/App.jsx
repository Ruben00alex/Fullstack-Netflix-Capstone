import { useState } from "react";
import Modal from "react-modal/lib/components/Modal";

function App() {
  let [isMovieModalOpen, setIsMovieModalOpen] = useState(false);

  let [movies, setMovies] = useState([
    {
      title: "The Godfather",
      year: 1972,
      cover:
        "https://www.desktopbackground.org/download/1280x720/2013/10/12/653194_the-godfather-wallpapers_1280x800_h.jpg",
      runTime: "175 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
    },
    {
      title: "The Shawshank Redemption",
      year: 1994,
      cover:
        "https://vmndims.binge.com.au/api/v2/img/5e72adc1e4b09b84ec6be3c7-1584573892104?location=tile&imwidth=1280",
      runTime: "142 min",
      genre: ["Crime", "Drama"],
      director: "Frank Darabont",
    },
    {
      title: "The Godfather: Part II",
      year: 1974,
      cover:
        "https://wallpapercave.com/wp/wp4119161.jpg",
      runTime: "202 min",
      genre: ["Crime", "Drama"],
      director: "Francis Ford Coppola",
    },
    {
      title: "The Dark Knight",
      year: 2008,
      cover:
        "https://i1.wp.com/www.sinembargo.mx/wp-content/uploads/2018/07/the-dark-knight.jpg?fit=1100%2C580&quality=80&strip=all&ssl=1",
      runTime: "152 min",
      genre: ["Action", "Crime", "Drama", "Thriller"],
      director: "Christopher Nolan",
    },
    
  ]);

  return (
    <>

<div className="relative text-white">
        <img
          src={movies[0].cover}
          alt={movies[0].title}
          className="aspect-video h-1/4 w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/70" />
        <div className="top-0 lg:top-1/3  absolute flex-col gap-8 ml-2 lg:ml-8 my-4 p-4">
          <h1 className="text-3xl lg:text-5xl font-bold my-0 text-white bg-black/50 p-2">
            {movies[0].title}
          </h1>
          <p className="text-lg lg:text-xl">{movies[0].year}</p>
          <p className="text-sm">{movies[0].runTime}</p>
          <p className="text-sm">{movies[0].genre[0]}</p>
          <p className="text-sm">{movies[0].director}</p>
          <button className=" bg-slate-700 text-white hover:text-black hover:bg-red-600 duration-300 m-4 px-4 py-2 ">
            Add to Watchlist
          </button>
          <button className=" bg-slate-700 text-white hover:text-black hover:bg-red-600 duration-300 m-4 px-4 py-2  " onClick={() => setIsMovieModalOpen(true)}>
            Play
          </button>
        </div>
      </div>
        <h2 className="text-2xl font-bold my-8 text-white  p-2 mx-4">
          Movies
        </h2>
      <div
        className="flex flex-row items-center h-fit mx-auto w-full  my-4 gap-2 overflow-x-scroll md:overflow-hidden  overflow-y-hidden relative duration-500 py-6 bg-slate-700/70 "
        id="moviesCarousel"
      >  
        <button 
          className="sticky left-0  bg-slate-700/70 text-white  px-4 py-10 z-10  hover:bg-red-600/70 duration-300"
          onClick={() => {
            document.querySelector("#moviesCarousel").scrollLeft -= 200;
          }}
        >
          {"<"}
        </button>


        {movies.map((movie) => (

        <img
          src={movie.cover}
          alt={movie.title}
          // make pointer when hover
          className="aspect-video w-44 lg:w-64  object-cover float-left hover:scale-125  duration-300 hover:brightness-50 hover:cursor-pointer "
          key={movie.title}
        />

        ))}

        <button
        className="sticky right-0  bg-slate-700/70 text-white px-4 py-10 z-10 hover:bg-red-600/70 duration-300 float-right ml-auto"
          onClick={() => {
            document.querySelector("#moviesCarousel").scrollLeft += 200;
          }}
        >
          {">"}
        </button>
      </div>

      <h2 className="text-2xl font-bold my-8 text-white bg-black/50 p-2">
        TV Shows
      </h2>
      <Modal
        isOpen={isMovieModalOpen}
        onRequestClose={() => setIsMovieModalOpen(false)}
        className="bg-slate-700/70 text-white absolute w-5/6 h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-filter backdrop-blur-sm z-10"
      >
      <iframe className=" aspect-video w-full mx-0 my-auto top-1/2 left-1/2 rounded-2xl  content-center "
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/NmzuHjWmXOc?autoplay=1`}>
</iframe>
      </Modal>
    </>
  );
}

export default App;
