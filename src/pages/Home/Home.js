import React, { useState } from 'react';
import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchResults from '../../components/SearchResults/SearchResults';
import Nominations from '../../components/Nominations/Nominations';
import Banner from '../../components/Banner/Banner';
import API from '../../utils/API';
import db from '../../db/db';
import { useLiveQuery } from 'dexie-react-hooks';



export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    const [lastSearched, setLastSearched] = useState("");
    const [movieData, setMovieData] = useState([]);
    const [searchError, setSearchError] = useState("");
    const [message, setMessage] = useState(null);
    const nominations = useLiveQuery(() => db.movies.toArray(), []) || [];

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
            setLastSearched(searchValue);
            setSearchValue("");
        }
    }

    const nominateMovie = movie => {
        if (nominations.length < 5) {
            db.movies.add({ 
                imdbID: movie.imdbID,
                Title: movie.Title,
                Year: movie.Year
            })
        } else {
            console.log("Maximum allowed nominations reached");
            setMessage("You can only nominate 5 movies");
            setTimeout(() => setMessage(null), 5000);
        }
    }

    const removeMovie = movie => {
        db.movies.delete(movie.imdbID)
    }

    return (
        <main>
            <Banner completed={nominations.length} message={message} />
            <h1>The Shoppies</h1>
            <SearchBar handleInputChange={handleInputChange} handleSearch={handleSearch} searchValue={searchValue} />
            <section id="tableRow">
                <SearchResults movieData={movieData} lastSearched={lastSearched} searchError={searchError} nominateMovie={nominateMovie} nominations={nominations} />
                <Nominations nominations={nominations} removeMovie={removeMovie} />
            </section>
        </main>
    );
}