import './Nominations.css';
import { Collection, CollectionItem, Button } from 'react-materialize';

export default function Nominations({ nominations, removeMovie }) {
    return (
        <Collection id="nominations">
            {nominations.length > 0 && nominations.map((movie, index) => (
                <CollectionItem key={index}>
                    <span>{movie.Title} {movie.Year}</span>
                    <Button onClick={() => removeMovie(movie)}>Remove</Button>
                </CollectionItem>
            ))}
        </Collection>
    )
}