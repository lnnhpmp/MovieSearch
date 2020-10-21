import React, {useState} from 'react';
import MovieRow from '../MovieRow/MovieRow';
import './SearchBar.scss';

function SearchBar() {
    const [query, setQuery] = useState('');

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            setQuery(e.target.value);
            console.log(e.target.value);
        }
    }

    return (
        <div>
            <input 
                placeholder="Enter your search term" 
                onKeyDown={handleKeyDown}
            />
            <MovieRow query={query}/>
        </div>
    );
}

export default SearchBar;