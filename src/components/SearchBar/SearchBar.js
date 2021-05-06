import { TextInput } from 'react-materialize'

export default function SearchBar({ handleInputChange }) {
    return (
        <form>
            <TextInput icon="search" label="Search" onChange={handleInputChange} />
        </form>
    )
}