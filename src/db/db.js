import Dexie from 'dexie';

const db = new Dexie('Nominations');
db.version(1).stores(
    { movies: "imdbID, title, year"}
);

export default db;