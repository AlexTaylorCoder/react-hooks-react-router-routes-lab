import React from "react";
import { movies } from "../data";

function Movies() {
  const movieList = movies.map((movie,index)=><div key={index}>{movie.title}{movie.time}<ul>{movie.genres.map((genre,index)=><li key={index}>{genre}</li>)}</ul></div>)
  return (
  <div>
    <h1>Movies Pages</h1>
    {movieList}
  </div>);
}

export default Movies;
