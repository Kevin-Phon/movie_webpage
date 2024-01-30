import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./components/MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=aba8cf59";

const movie1 = {
  Title: "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  Year: "2016",
  imdbID: "tt18689424",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg",
};

const App = () => {
  let [movies, setMovies] = useState([]);
  let [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    // search movie
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="search movies"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {/* movie card  */}
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.Title}/>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h1>No movies found!</h1>
        </div>
      )}
    </div>
  );
};

export default App;
