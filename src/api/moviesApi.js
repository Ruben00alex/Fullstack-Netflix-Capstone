

export const getMovies = async () => {
    const response = await fetch('http://localhost:3000/movies' )
    const movies = await response.json()
    console.log(movies)
    return movies
}
export const saveMovie = async (movie) => {
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




