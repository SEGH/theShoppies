import './SearchResults.css';
import { Collection, CollectionItem, Button } from 'react-materialize';

export default function SearchResults({ movieData, lastSearched, searchError, nominateMovie, nominations }) {
    console.log(movieData)
    return (
        <Collection id="searchResults" header={searchError !== "" ? searchError : movieData.length > 0? `Results for "${lastSearched}"` : ""}>
            {movieData.length > 0 && movieData.map((movie, index) => (
                <CollectionItem key={index}>{movie.Title} {movie.Year}
                    <Button className={nominations.filter(obj => obj.imdbID === movie.imdbID).length > 0 ? "disabled" : ""}
                        onClick={() => nominateMovie(movie)}>Nominate</Button>
                </CollectionItem>
            ))}
        </Collection>
    )
}