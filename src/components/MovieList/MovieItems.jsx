import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function MovieItems({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    function handleMovieDetails() {
        dispatch({
            type: 'SELECT_MOVIE',
            payload: movie.id
        });
        history.push(`/movies/${movie.id}/details`);
    }

    return (
        <div onClick={handleMovieDetails} key={movie.id} value={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} />
        </div>
    );
}

export default MovieItems;