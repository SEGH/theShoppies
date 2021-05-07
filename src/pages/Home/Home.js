import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import Nominations from '../../components/Nominations/Nominations';
import API from '../../utils/API';

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [movieData, setMovieData] = useState([]);
    const [searchError, setSearchError] = useState("");
    const [nominations, setNominations] = useState([]);

    const handleInputChange = event => {
        const { value } = event.target;
        setSearchValue(value);
    }

    const handleSearch = event => {
        event.preventDefault();

        if (searchValue) {
            console.log(`Searching ${searchValue}...`)
            setMovieData([]);
            setSearchError("")

            API.getMovies(searchValue).then(data => {
                if (data.Response === "False") {
                    setSearchError(data.Error)
                } else {
                    setMovieData(data.Search)
                }
            })
            setSearchValue("");
        }
    }

    const nominateMovie = movie => {
        setNominations([...nominations, movie])
    }

    return (
        <main>
            <h1>The Shoppies</h1>
            <SearchBar handleInputChange={handleInputChange} handleSearch={handleSearch} searchValue={searchValue} />
            <SearchResults movieData={movieData} searchError={searchError} nominateMovie={nominateMovie} nominations={nominations} />
            <Nominations nominations={nominations} />
        </main>
    );
}