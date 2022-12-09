import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Modal from "react-modal";
const schemaMovie = yup.object().shape({
  title: yup.string().required(),
  plot: yup.string().required(),
  genre: yup.string().required(),
  director: yup.string().required(),
  year: yup.number().required(),
  cover: yup.string().required(),
});

const AddMovieModal = ({ isOpen, onClose, onAddMovie }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schemaMovie),
  });

  let coverUrl = watch("cover");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-black text-white absolute  w-full lg:w-1/4 h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm "
      overlayClassName="fixed inset-0 bg-black/30 backdrop-filter backdrop-blur-sm z-20"
    >
      <div>
        <form onSubmit={handleSubmit(onAddMovie)}>
          <div className="flex flex-col text-slate-800 mx-24 py-4">
            <label htmlFor="title" className="text-white">
              Title
            </label>
            <input
              type="text"
              id="title"
              className="p-2 rounded-md"
              {...register("title")}
            />
            <p className="text-red-500">{errors.title?.message}</p>

            <label htmlFor="plot" className="text-white">
              Plot
            </label>
            <textarea
              type="text"
              id="plot"
              // aligns the text to the top of the textarea
              className="p-2 rounded-md  resize-none  text-top"
              {...register("plot")}
            />
            <p className="text-red-500">{errors.plot?.message}</p>

            <label htmlFor="genre" className="text-white">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              className="p-2 rounded-md"
              {...register("genre")}
            />
            <p className="text-red-500">{errors.genre?.message}</p>

            <label htmlFor="director" className="text-white">
              Director
            </label>
            <input
              type="text"
              id="director"
              className="p-2 rounded-md"
              {...register("director")}
            />
            <p className="text-red-500">{errors.director?.message}</p>

            <label htmlFor="year" className="text-white">
              Year
            </label>
            <input
              type="number"
              id="year"
              className="p-2 rounded-md"
              {...register("year")}
            />
            <p className="text-red-500">{errors.year?.message}</p>

            <label htmlFor="cover" className="text-white">
              Cover
            </label>
            <input
              type="text"
              id="cover"
              className="p-2 rounded-md"
              {...register("cover")}
            />
            <p className="text-red-500">{errors.cover?.message}</p>
            {coverUrl && (
              <img src={coverUrl} alt="cover" className="w-full mx-auto" />
            )}

            <div className="flex flex-row gap-2 mx-auto my-4">
              <button type="submit" className="text-white bg-slate-700 px-4 py-2 rounded-md">
                Add Movie
              </button>

              <button type="reset" className="text-white bg-slate-700 px-4 py-2  rounded-md">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddMovieModal;
