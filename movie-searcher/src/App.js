import React from 'react';
import './App.css';
import MovieSearcherTitle from '../src/components/MovieSearcherTitle/MovieSearcherTitle';
import SearchBar from '../src/components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <MovieSearcherTitle />
      <SearchBar />
    </div>
  );
}

export default App;
