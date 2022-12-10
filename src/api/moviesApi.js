const moviesApi = () => {

    

const getMovies = async () => {
    console.log('getMovies')
    const response = await fetch('http://localhost:3000/movies' )
    console.log(response)
    const movies = await response.json()
    console.log(movies)
    return movies
}
const saveMovie = async (movie) => {
    console.log('saveMovie')
    console.log(movie)
    const response = await fetch('http://localhost:3000/movies', {
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


const test = async () => {
    console.log('test')
    return "test"
}


return {
    getMovies,
    saveMovie,
    test
}

}

export default moviesApi ;



