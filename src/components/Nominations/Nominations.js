import './Nominations.css';
import { Collection, CollectionItem, Button, Icon } from 'react-materialize';

export default function Nominations({ nominations, removeMovie }) {
    return (
        <Collection id="nominations" header={nominations.length === 0 ? 'No Nominations' : 'Nominations'}>
            {nominations.length > 0 ? nominations.map((movie, index) => (
                <CollectionItem key={index}>
                    <span>{movie.Title} {movie.Year}</span>
                    <Button onClick={() => removeMovie(movie)}>Remove</Button>
                </CollectionItem>
            ))
            : <CollectionItem className="noMoviesIcon"><Icon large center>movies</Icon></CollectionItem>
        }
        </Collection>
    )
}