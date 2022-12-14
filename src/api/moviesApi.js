

const SERVER_URL =("https://fullstack-netflix-clone-rest-api.up.railway.app/" ) + 'movies/';

export const getMovies = async () => {
    const response = await fetch(SERVER_URL )
    const movies = await response.json()
    console.log(movies)
    return movies
}
export const saveMovie = async (movie) => {
    console.log('saveMovie')
    console.log(movie)
    const response = await fetch(SERVER_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    console.log(response)
    const savedMovie = await response.json()
    console.log(savedMovie)
    return savedMovie

}

export const deleteMovie = async (movie) => {
    console.log('deleteMovie')
    console.log(movie)

    const response = await fetch(`${SERVER_URL}${movie}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    console.log(response)
    const deletedMovie = await response.json()
    console.log(deletedMovie)
    return deletedMovie
}

export const updateMovie = async (movie) => {
    console.log('updateMovie')
    console.log(movie)
    const response = await fetch(`${SERVER_URL}${movie._id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movie)
    })
    console.log(response)
    const updatedMovie = await response.json()
    console.log(updatedMovie)
    return updatedMovie
}

const test = async () => {
    console.log('test')
    return "test"
}




