import React from "react";
import { directors } from "../data";

function Directors() {
  const directorList = directors.map((item,index)=><div key={index}>{item.name}<ul>{item.movies.map((movie,index)=><li key={index}>{movie}</li>)}</ul></div>)
  return (
  <div>
    <h1>Directors Page</h1>
    {directorList}
  </div>);
}

export default Directors;
