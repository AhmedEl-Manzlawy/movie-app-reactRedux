import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movie from "./components/Movie/Movie";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar/Navbar";
import MovieDetails from "./pages/MovieDetails";
import { LanguageContext } from './components/Context/languageContext';
import { useState } from "react";
import NotFound from "./pages/NotFound";
import { PageNumberContext } from "./components/Context/pageNumberContext";

function App() {
  const [lang , setLang] = useState("en");
  const [pageNo, setPageNo] = useState(1);
  return (
    <div className="min-vh-100" style={{backgroundColor:"#2f2f2f" , paddingTop:100}} >
      <LanguageContext.Provider value={{lang , setLang}}>
      <PageNumberContext.Provider value={{pageNo, setPageNo}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </PageNumberContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
