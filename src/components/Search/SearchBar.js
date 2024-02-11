import React, { useState } from 'react'
import { MOVIE_KEY } from '../../Api/api';

const SearchBar = () => {
    const [query, setQuery] = useState('')
  const handelForm = (e) => {
    e.preventDefault();
    setQuery("");
  };

  const handelSearch = (e) => {
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&query=${query}}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
        //   setMovies(data.results);
          console.log(data.results);
        } else {
        //   setMovies([]);
        }
      });
  };

  // const getMovieSearch = () => {
  //   axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?api_key=${MOVIE_KEY}&query=${query} `
  //     )
  //     .then(res => res.json())
  //     .then(data => data.results)
  //     .catch((err) => console.log(err));
  // };
  
  return (
    <div>
    {/* search  */}

    <form className="container py-4" onSubmit={handelForm}>
        <div className="input-group">
          <span className="input-group-text bg-primary" id="basic-addon1">
            Search
          </span>
          <input
            type="text"
            className="form-control"
            value={query}
            placeholder="Search Movie"
            onChange={handelSearch}
          />
        </div>
      </form>
    </div>
  )
}

export default SearchBar