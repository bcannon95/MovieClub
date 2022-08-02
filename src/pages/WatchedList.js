import React from 'react';
import MovieCard from '../components/MovieCard';

export default function WatchedList(props) {
    return (
        <>
            <div className='d-flex flex-wrap'>
                {props.movieList.map(movie => {
                    console.log(movie.viewed);
                    if(movie.viewed === "yes") {
                    return <MovieCard
                        key={movie.id}
                        movie={movie}
                        removeMovie={props.removeMovie}
                    />
                    }
                }
                )}
            </div>
        </>
    )
}