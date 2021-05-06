import { Collection, CollectionItem, Button } from 'react-materialize';

export default function SearchResults({ movieData, searchError }) {
    return (
        <Collection header={searchError !== "" && searchError}>
            {movieData.length > 0 && movieData.map(movie => <CollectionItem>{movie.Title} {movie.Year}<Button>Nominate</Button></CollectionItem>)}
        </Collection>
    )
}