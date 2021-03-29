import axios from "axios";

class MovieApi {
  constructor() {}
  getMovies({ language, apiKey }) {
    const path = `https://api.themoviedb.org/3/movie/popular?language=${language}&api_key=${apiKey}`;
    return axios.get(path);
  }
}

export default new MovieApi();
