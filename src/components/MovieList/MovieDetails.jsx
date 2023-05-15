import { useSelector } from 'react-redux';


function MovieDetails() {
    const selectedMovie = useSelector(state => state.selectedMovie);
    console.log('selectedMovie:', selectedMovie);
    return (
        <div>
            <p>hello</p>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
            <p>{selectedMovie.description}</p>
        </div>
    );
}

export default MovieDetails;