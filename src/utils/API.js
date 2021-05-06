const API = {
    getMovies: async function(query) {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=${query}&type=movie`);
        const movies = await response.json();
        return movies;
    }
}

export default API;