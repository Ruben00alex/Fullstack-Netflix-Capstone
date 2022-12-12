import MovieCarousel from "../MovieCarousel";
import MovieCatalogueGrid from "../MovieCatalogueGrid";

const MyListPage = ({ watchList, onRemoveMovie }) => {

    return (
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold mt-8 text-slate-200  w-fit ml-4 p-2  rounded-lg">
            My List
        </h2>

        {/* MovieCatalogueGrid = ({ movies,  setIsMovieInfoModalOpen,setChosenMovie }) */}
        

        <MovieCarousel
            movies={watchList}
            genre={"My List"}
            key={"My List"}
        />
        </div>
    );
    }

    export default MyListPage;

