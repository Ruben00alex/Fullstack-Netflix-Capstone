import { useQuery, useMutation, useQueryClient } from 'react-query';

import { getMovies, saveMovie } from "../api/moviesApi";

export const useMoviesData = () => {
    return  useQuery(['movies'],getMovies, { staleTime: 1000 *60 })
}
export const useSaveMovie = () => {
    const queryClient = useQueryClient()

    return useMutation(saveMovie, {
        onSuccess: () => {
            queryClient.invalidateQueries('movies')
        }
    })
}
