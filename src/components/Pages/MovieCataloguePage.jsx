import { useEffect, useState, useContext } from "react";

import FuzzySearch from "fuzzy-search";
import MovieCatalogueGrid from "../MovieCatalogueGrid";
import MoviesContext from "../../contexts/MoviesContext";

import { useMoviesData } from "../../hooks/useMoviesDataHook";

const MovieCataloguePage = () => {
  const { setIsMovieInfoModalOpen, setChosenMovie, genres } =
    useContext(MoviesContext);

  let { data: movies, isLoading, error } = useMoviesData();

  let [filteredMovies, setFilteredMovies] = useState(null); //the filteredMovies state will be used to store the movies array after it has been filtered by the search function,  sorted by the sort function or by the genre filter

  //here we are using the useEffect hook to set the filteredMovies state to the movies array when the movies array is loaded, otherwise the filteredMovies state will be null which will cause the MovieCatalogueGrid component to display a loading message
  useEffect(() => {
    if (movies) {
      setFilteredMovies(movies);
    }
  }, [movies]);

  let [searchTerm, setSearchTerm] = useState("");

  //we will use the fuzzy-search library to search through the movies array, this makes it extremely easy to search through an array of objects using a string input from the user
  let searcher = new FuzzySearch(
    movies,
    ["title", "genre", "director", "year"],
    {
      caseSensitive: false,
      sort: true,
    }
  );

  //here we are using the useEffect hook to run the search function every time the searchTerm changes
  useEffect(() => {
    if (searchTerm == "All" || searchTerm == "") {
      setFilteredMovies(movies);
      return;
    }
    let results = searcher.search(searchTerm);
    setFilteredMovies(results);
  }, [searchTerm]);

  //function to handle sorting the movies array
  let sortMovies = (sortType) => {
    let newMovies = [...filteredMovies];
    let sortedMovies = newMovies.sort((a, b) => {
      if (sortType == "year-ascending") {
        return a.year - b.year;
      } else if (sortType == "year-descending") {
        return b.year - a.year;
      } else if (sortType == "title-ascending") {
        return a.title.localeCompare(b.title);
      } else if (sortType == "title-descending") {
        return b.title.localeCompare(a.title);
      } else if (sortType == "All") {
        return a.id - b.id;
      }
    });
    setFilteredMovies(sortedMovies);
  };

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <>
      {filteredMovies ? (
        <>
          <div className="flex flex-col items-center mt-16  ">
            <div className="flex flex-col lg:flex-row   gap-2 ">
              <input
                type="text"
                placeholder="Search by title, genre, director, year"
                //if filtereMovies is empty, we will apply focus:bg-red-700/50 to the input to indicate to the user that there are no results, else we will apply focus:bg-green-700/50
                className={`w-80 h-12 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500  mx-auto lg:ml-48 bg-black text-white ${
                  filteredMovies.length == 0
                    ? "focus:bg-red-700/50"
                    : "focus:bg-green-800/40"
                }  duration-300`}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="flex flex-row ">
                <select
                  className="w-32 h-12 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500  ml-auto"
                  onChange={(e) => setSearchTerm(e.target.value)}
                >
                  <option value="All">All</option>
                  {/* make an option for each unique genre in the movies array , make sure each option appears only once */}

                  {genres.map((genre) => {
                    return <option value={genre}>{genre}</option>;
                  })}
                </select>
                <select
                  className="w-fit  h-12 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-gray-500 float-right ml-4 mr-auto lg:mr-48"
                  onChange={(e) => sortMovies(e.target.value)}
                >
                  <option value="All" key="All">Sort by</option>
                  <option value="year-ascending" key = "year-ascending">Year ascending</option>
                  <option value="year-descending" key = "year-descending">Year descending</option>
                  <option value="title-ascending" key = "title-ascending">Title ascending</option>
                  <option value="title-descending" key = "title-descending">Title descending</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <h1 className="text-2xl text-white">
              {searchTerm == "" ? "Total movies" : "Results"}:{" "}
              {filteredMovies.length}
            </h1>
            {filteredMovies.length == 0 && (
              <h1 className="text-2xl text-white">
                No results found for "{searchTerm}"
              </h1>
            )}
          </div>
          <MovieCatalogueGrid
            movies={filteredMovies}
            genre="SearchResults"
            setChosenMovie={setChosenMovie}
            setIsMovieInfoModalOpen={setIsMovieInfoModalOpen}
          />
        </>
      ) : (
        <div className="flex justify-center items-center h-screen">
          {" "}
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-slate-200"></div>
        </div>
      )}
    </>
  );
};

export default MovieCataloguePage;
