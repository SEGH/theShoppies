import { Collection, CollectionItem } from 'react-materialize';

export default function Nominations({ nominations }) {
    return (
        <Collection>
            {nominations.length > 0 && nominations.map((movie, index) => <CollectionItem key={index}>{movie.Title}</CollectionItem>)}
        </Collection>
    )
}