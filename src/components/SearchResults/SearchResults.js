import './SearchResults.css';
import { Collection, CollectionItem, Button, Icon } from 'react-materialize';

export default function SearchResults({ movieData, lastSearched, searchError, nominateMovie, nominations }) {
    console.log(movieData)
    return (
        <Collection id="searchResults" header={searchError !== "" ? searchError : movieData.length > 0 ? `Results for "${lastSearched}"` : 'Results'}>
            {movieData.length > 0 ? movieData.map((movie, index) => (
                <CollectionItem key={index}>
                    <span>{movie.Title} ({movie.Year})</span>
                    <Button small waves="light" className={nominations.filter(obj => obj.imdbID === movie.imdbID).length > 0 ? "disabled" : ""}
                        onClick={() => nominateMovie(movie)}>Nominate</Button>
                </CollectionItem>
            ))
                : <CollectionItem className="noMoviesIcon"><Icon large center>movies</Icon></CollectionItem>
            }
        </Collection>
    )
}