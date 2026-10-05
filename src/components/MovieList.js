import MovieItem from "./MovieItem";


export default function MovieList({ movies, onToggle }) {
    if (movies.length === 0) return <p>Không có phim nào</p>;

    return (
        <ul className="movie-list">
            {movies.map((m) => (
                <MovieItem key={m.id} movie={m} onToggle={onToggle} />
            ))} 
        </ul>
    );
}