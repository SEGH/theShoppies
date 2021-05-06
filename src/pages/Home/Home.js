import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Home() {
    const [searchValue, setSearchValue] = useState("");
    
    const handleInputChange = event => {
        const { value } = event.target;
        console.log(value)
        setSearchValue(value);
    }

    return (
        <main>
            <h1>The Shoppies</h1>
            <SearchBar handleInputChange={handleInputChange} />
        </main>
    );
}