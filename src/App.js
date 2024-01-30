import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com?apikey=aba8cf59";

const App = () => {

  const searchMovies = async(title) => {
    let response = await fetch(`${API_URL}&s=${title}`)
    let data = await response.json()

    console.log(data.Search);
    
  }

  useEffect(() => {
    searchMovies('Superman')
  },[])

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default App;
