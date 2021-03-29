import React from "react";

export default function Movie({ movie }) {
  return <p>{movie && movie.id}</p>;
}
