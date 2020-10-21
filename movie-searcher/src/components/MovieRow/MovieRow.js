import React, {useState, useEffect} from 'react';
import Movie from './Movie/Movie'
import './MovieRow.scss';

function MovieRow(props) {
    const [moviesList, setMoviesList] = useState([]);
    const [query, setQuery] = useState('marvel');

    async function searchMovie() {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8a497abe2f26f3f7e3a45920f3584053&language=en-US&query=${query}&page=1&include_adult=false`);
        const data = await response.json();
        const moviesList = data.results;
        setMoviesList(moviesList);
    }

    useEffect(() => {
        searchMovie();
    }, [query]);

    useEffect(() => {
        if (props.query) {
            setQuery(props.query);
        }
    }, [props]);


    return (
        <div className='movieList'>
            {
                moviesList.map(movie => (
                    <Movie 
                        key={movie.id}
                        movie={movie}  
                    />
                ))
            }
        </div>
    );
}

export default MovieRow;