import React from 'react';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const selectedMovie = useSelector(state => state.selectedMovie);
    console.log('selectedMovie:', selectedMovie);

    return (
        <div>
            <h2>{selectedMovie.title}</h2>
            <p>{selectedMovie.name}</p>
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
            {selectedMovie.genres.map((genre) => {
                return (
                    <p key={genre}>{genre}</p>
                )
            })}
            <p className='descript'>{selectedMovie.description}</p>
        </div>
    );
}

export default MovieDetails;
