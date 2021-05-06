import { TextInput } from 'react-materialize'

export default function SearchBar({ handleInputChange, handleSearch, searchValue }) {
    return (
        <form onSubmit={handleSearch}>
            <TextInput icon="search" label="Search" onChange={handleInputChange} value={searchValue} />
        </form>
    )
}