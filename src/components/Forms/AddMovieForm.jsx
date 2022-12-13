import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";



import { useEffect, useState } from "react";

import Modal from "react-modal";



const AddMovieForm = ({ onSubmit, defaultEditValues }) => {
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

      
      const defaultValues = {
        title: "",
        plot: "",
        genre: "",
        director: "",
        year: 0,
        cover: "",
        runTime: "",
        video: "",
      };

        const { control, watch, handleSubmit, reset } = useForm({
            defaultValues: defaultEditValues || defaultValues,
            resolver: yupResolver(schemaMovie),
            mode: "all",
            });

            let imageUrl = watch("image");



    
            return (
                <div className="w-full mx-auto ">
                    <form
                        className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col gap-2"
                        onSubmit={handleSubmit(onSubmit)}
                        onReset={() => reset(defaultValues)}
                    >
                        <Controller
                            control={control}
                            name="title"
                            render={({ field, fieldState }) => (<>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Title"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>
                            
                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="plot"
                            render={({ field, fieldState }) => (<>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Plot"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>
                                
                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="genre"
                            render={({ field, fieldState }) => (<>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Genre"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>

                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="director"
                            render={({ field, fieldState }) => (<>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Director"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>

                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="year"
                            render={({ field, fieldState }) => (<>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    placeholder="Year"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>

                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="cover"
                            render={({ field, fieldState }) => (<>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Cover"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>

                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="runTime"
                            render={({ field, fieldState }) => (<>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Run Time"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>

                                </>
                            )}
                        />

                        <Controller
                            control={control}
                            name="video"
                            render={({ field, fieldState }) => (<>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Video"
                                    {...field}
                                />
                                <p className="text-red-500 text-xs italic"> {fieldState.error?.message}</p>

                                </>
                            )}
                        />

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="reset"
                            >
                                Reset
                            </button>
                        </div>
                    </form>
                </div>
            );
        };

export default AddMovieForm;

