import { yupResolver } from "@hookform/resolvers/yup";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";

import { useEffect, useState } from "react";

import Modal from "react-modal";
const schemaMovie = yup.object().shape({
  title: yup.string().required(),
  plot: yup.string().required(),
  genre: yup.string().required(),
  director: yup.string().required(),
  year: yup.number().required(),
  cover: yup.string().required(),
  runTime: yup.string().required(),
  video: yup.string().required(),
});

const AddMovieModal = ({
  isOpen,
  onClose,
  onAddMovie,
  defaultFormValues,
  isEdit,
  handleEdit,
}) => {
  console.log(defaultFormValues);

  //reset the default values to empty if we are adding a movie

  let defaultValues = {
    title: "",
    plot: "",
    genre: "",
    director: "",
    year: 0,
    cover: "",
    runTime: "",
    video: "",
  };

  console.log("VALUES");
  console.log(defaultValues, typeof defaultValues);
  const {
    reset,
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    //use default values if they are passed in , otherwise use the default values
    defaultValues: defaultFormValues || defaultValues,

    resolver: yupResolver(schemaMovie),
  });
  useEffect(() => {
    reset(defaultFormValues || defaultValues);
  }, [defaultFormValues, reset]);
  let coverUrl = watch("cover");
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="bg-black text-white absolute  w-full lg:w-1/4 h-auto mx-auto my-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl p-2 flex flex-col backdrop:bg-black/50 backdrop-blur-sm "
      overlayClassName="fixed inset-0 bg-black/30 backdrop-filter backdrop-blur-sm z-20"
      ariaHideApp={false}
    >
      <div>
        <form
          onSubmit={
            //if we are editing a movie, call the handleEdit function and close the modal
            isEdit
              ? handleSubmit((data) => {
                  handleEdit(data);
                  onClose();
                })
              : //if we are adding a movie, call the onAddMovie function and close the modal
                handleSubmit(onAddMovie)
          }
          component="form"
          onReset={() => reset(defaultValues)}
        >
          <div className="flex flex-col text-slate-800 mx-24 py-4">
            <Controller
              control={control}
              name="title"
              render={({ field, fieldState }) => (
                <>
                  {" "}
                  <input
                    {...field}
                    label="title"
                    className="p-2 rounded-md  resize-none  text-top"
                  />
                  <p className="text-red-500">{fieldState.error?.message}</p>
                </>
              )}
            />
            <Controller
              control={control}
              name="plot"
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor="plot" className="text-white">
                    Plot
                  </label>
                  <textarea
                    type="text"
                    id="plot"
                    // aligns the text to the top of the textarea
                    className="p-2 rounded-md  resize-none  text-top"
                    {...field}
                  />
                  <p className="text-red-500">{fieldState.error?.message}</p>
                </>
              )}
            />
            <Controller
              control={control}
              name="genre"
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor="genre" className="text-white">
                    Genre
                  </label>
                  <input
                    type="text"
                    id="genre"
                    className="p-2 rounded-md"
                    {...field}
                  />
                  <p className="text-red-500">{fieldState.error?.message}</p>
                </>
              )}
            />
            <Controller
              control={control}
              name="director"
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor="director" className="text-white">
                    Director
                  </label>
                  <input
                    type="text"
                    id="director"
                    className="p-2 rounded-md"
                    {...field}
                  />
                  <p className="text-red-500">{fieldState.error?.message}</p>
                </>
              )}
            />
            <Controller
              control={control}
              name="year"
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor="year" className="text-white">
                    Year
                  </label>
                  <input
                    type="number"
                    id="year"
                    className="p-2 rounded-md"
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              control={control}
              name="cover"
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor="cover" className="text-white">
                    Cover
                  </label>
                  <input
                    type="text"
                    id="cover"
                    className="p-2 rounded-md"
                    {...field}
                  />
                  <p className="text-red-500">{fieldState.error?.message}</p>
                </>
              )}
            />
            <Controller
              control={control}
              name="video"
              render={({ field, fieldState }) => (
                <>
                  <label htmlFor="video" className="text-white">
                    Video
                  </label>
                  <input
                    type="text"
                    id="video"
                    className="p-2 rounded-md"
                    {...field}
                  />
                  <p className="text-red-500">{fieldState.error?.message}</p>
                </>
              )}
            />

            {coverUrl && (
              <img src={coverUrl} alt="cover" className="w-full mx-auto my-4" />
            )}

            <div className="flex flex-row gap-2 mx-auto my-4">
              <button
                type="submit"
                className="text-white bg-slate-700 px-4 py-2 rounded-md"
              >
                {isEdit ? "Edit" : "Add Movie"}
              </button>

              <button
                type="reset"
                className="text-white bg-slate-700 px-4 py-2  rounded-md"
              >
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
