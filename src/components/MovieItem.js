

import React from 'react'

function MovieItem({movie, onToggle, onDelete}) {
  return (
    <li className="movie-item">
      <label>
        <input
          type="checkbox"
          checked={movie.completed}
          onChange={() => onToggle(movie.id)}
        />
        <span>{movie.title} | {movie.genre} | {movie.year} | {movie.rating}</span>
        
      </label>  
    </li>
  )
}

export default MovieItem