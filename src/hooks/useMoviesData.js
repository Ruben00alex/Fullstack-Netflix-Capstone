import {useQuery ,useMutation, useQueryClient } from 'react-query';

import moviesApi from "../api/moviesApi";

const useMoviesData = () => {

const getMoviesData = () => {
    console.log('useMoviesData')
    return useQuery('movies', moviesApi.getMovies)
}

const useSaveMovie = () => {
    const queryClient = useQueryClient()
    return useMutation(moviesApi.saveMovie, {
        onSuccess: () => {
            queryClient.invalidateQueries('movies')
        }
    })
}

return {
    getMoviesData,
    useSaveMovie
}

}

export default useMoviesData ;