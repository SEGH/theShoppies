const API = {
    getMovies: async function(query) {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&s=${query}&type=movie`);
        const movies = await response.json();
        return movies;
    }
}

export default API;