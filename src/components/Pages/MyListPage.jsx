import MovieCarousel from "../MovieCarousel";
import MovieCatalogueGrid from "../MovieCatalogueGrid";
import {useContext} from "react";
import MoviesContext from "../../contexts/MoviesContext";
const MyListPage = ({ watchList, onRemoveMovie }) => {
  const { setIsMovieInfoModalOpen, setChosenMovie, genres } =
    useContext(MoviesContext);
  return (
    <div className="flex flex-col mt-16">
      <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
        My List
      </h2>

{watchList.length == 0 ? ( <div className="flex justify-center items-center ">
        {" "}     <div className="text-2xl font-bold text-slate-200">Your watchlist is empty</div>
        </div>) : null}
      {/* MovieCatalogueGrid = ({ movies,  setIsMovieInfoModalOpen,setChosenMovie }) */}

      <MovieCatalogueGrid
        movies={watchList}
        setChosenMovie={setChosenMovie}
        setIsMovieInfoModalOpen={setIsMovieInfoModalOpen}
      />
    </div>
  );
};

export default MyListPage;
