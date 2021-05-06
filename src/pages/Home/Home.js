import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import API from '../../utils/API';

export default function Home() {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        setSearchValue(value);
    }

    const handleSearch = event => {
        event.preventDefault();

        if (searchValue) {
            console.log(`Searching ${searchValue}...`)
            API.getMovies(searchValue).then(data => console.log(data))
            setSearchValue("");
        }
    }

    return (
        <main>
            <h1>The Shoppies</h1>
            <SearchBar handleInputChange={handleInputChange} handleSearch={handleSearch} searchValue={searchValue} />
        </main>
    );
}