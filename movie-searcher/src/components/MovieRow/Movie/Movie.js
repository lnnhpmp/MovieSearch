import React, {useState, useEffect} from 'react';
import './Movie.scss';

function Movie(props) {
    const imgUrlPrefix = 'https://image.tmdb.org/t/p/original';
    const [movie, setMovie] = useState([]);
    const [movieData, setMovieData] = useState({
        title: '',
        overview: '',
        imgUrl: '',
    });
    
    useEffect(() => {
        setMovie(props.movie);
    }, [props]);

    useEffect(() => {
        if (movie) {
            setMovieData({
                title: movie.title,
                overview: movie.overview,
                imgUrl: movie.poster_path,
            });
        }
    }, [movie]);

    return (
        <div className='movie'>
            <h1>{movieData.title}</h1>
            <p>{movieData.overview}</p>
            <img src={imgUrlPrefix + movieData.imgUrl} alt={movieData.title}/>
        </div>
    );
}

export default Movie;