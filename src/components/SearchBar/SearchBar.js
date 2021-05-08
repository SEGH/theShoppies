import './SearchBar.css';
import { TextInput } from 'react-materialize'

export default function SearchBar({ handleInputChange, handleSearch, searchValue }) {
    return (
        <form id="searchBar" onSubmit={handleSearch}>
            <TextInput icon="search" label="Movie Title" onChange={handleInputChange} value={searchValue} />
        </form>
    )
}