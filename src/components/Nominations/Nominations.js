import { Collection, CollectionItem, Button } from 'react-materialize';

export default function Nominations({ nominations, removeMovie }) {
    return (
        <Collection>
            {nominations.length > 0 && nominations.map((movie, index) => (
                <CollectionItem key={index}>
                    {movie.Title} {movie.Year}
                    <Button onClick={() => removeMovie(movie)}>Remove</Button>
                </CollectionItem>
            ))}
        </Collection>
    )
}