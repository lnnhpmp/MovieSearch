import React from 'react';
import './MovieSearcherTitle.scss';

function MovieSearcherTitle() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={`${process.env.PUBLIC_URL}/img/apple-camera-493147.webp`} alt="movie-icon" />
            </td>
            <td>
              <h1>Movies Search</h1>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MovieSearcherTitle;
