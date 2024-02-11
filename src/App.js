import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar/Navbar";
import MovieDetails from "./pages/MovieDetails";
// import SearchBar from "./components/Search/SearchBar";

function App() {
  return (
    <div className="min-vh-100" style={{backgroundColor:"#2f2f2f"}} >
      <BrowserRouter>
      <Navbar />
      {/* <SearchBar /> */}
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="favourites" element={<Favourites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
