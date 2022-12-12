import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getMovies, saveMovie } from "../api/moviesApi";

import queryClient from '../react-query/client';
export const useMoviesData = () => useQuery(['movies'],  getMovies, { staleTime: 1000 * 60 })


export const useSaveMovie = () => {

    return useMutation(saveMovie, {
        onSuccess: () => {
            queryClient.invalidateQueries('movies')
        }
    })
}

