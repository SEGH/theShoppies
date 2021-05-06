import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Home() {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = event => {
        const { value } = event.target;
        console.log(value)
        setSearchValue(value);
    }

    const handleSearch = event => {
        event.preventDefault();

        if (searchValue) {
            console.log(`Searching ${searchValue}...`)
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