import React, { useEffect, useState } from "react";
import MovieApi from "./api/movieApi";
import "./style.css";
import moment from "moment";
import Movie from "./movie";

export default function App() {
  /* ******** INTRUCTIONS **************
     1. Fill the table with the info provided by the API
     2. Modify the stylesheets to get the desired UI
     3. Color the rows using an algorithm using the indexes of the loop. Choose one:
        a) Fibonnacci sequence
        b) Prime numbers
        c) Odd/Even.
     4. Modify the selector to support multi-language.

     ******** EXTRAS **************
     1. Use the Movie component to display the movie info
     2. Use environment variables to fill the default values
  */
  const [movies, setMovies] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    const apiKey = "1b501bbda107113acc653f328a2e935d";
    const language = "en";
    MovieApi.getMovies({
      apiKey,
      language
    }).then(response => {
      setMovies(response.data.results);
      console.log("Response", response);
    });
  };

  return (
    <div className="background">
      <div className="card">
        <div className="card-header">
          <h3>My movies!</h3>
          <select class="select" id="language">
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>

        <div className="card-body">
          <table className="tbl-header">
            <thead>
              <tr>
                <th>Index</th>
                <th>Title</th>
                <th>Popularity</th>
                <th>Release date</th>
              </tr>
            </thead>
            <tbody>
              {movies.map((movie, index) => (
                <tr key={index.toString()}>
                  <td>{index}</td>
                  <td>{movie.title}</td>
                  <td>{movie.popularity}</td>
                  <td>
                    {moment(movie.release_date, "YYYY-MM-DD").format(
                      "MM-DD-YYYY"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
