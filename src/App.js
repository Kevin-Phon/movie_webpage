import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=aba8cf59";

const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
  "Year": "2016",
  "imdbID": "tt18689424",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}

const App = () => {
  const searchMovies = async (title) => {
    let response = await fetch(`${API_URL}&s=${title}`);
    let data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    // search movie
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input type="text" placeholder="Superman" onChange={() => {}} />

        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {/* movie card  */}
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ?  movie1.Poster : 'http://via.placeholder.com/400'} alt={movie1.Title} />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
