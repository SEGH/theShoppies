import { Collection, CollectionItem, Button } from 'react-materialize';

export default function SearchResults({ movieData, searchError, nominateMovie }) {
    return (
        <Collection header={searchError !== "" && searchError}>
            {movieData.length > 0 && movieData.map((movie, index) => <CollectionItem key={index}>{movie.Title} {movie.Year}<Button onClick={() => nominateMovie(movie)}>Nominate</Button></CollectionItem>)}
        </Collection>
    )
}