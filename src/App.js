import React, { useState, useEffect } from "react";
import Nav from "./Components/Nav";
import { Container } from "react-bootstrap";
import Movies from "./Components/Movies";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from "./Components/MoviesDetails";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [pageCount, setpPageCount] = useState(0);

  const getAllMovies = async () => {
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=a85944df0c2c90e9221e1d64fd0e1b74&language=ar-US&page=1"
    );
    setMovies(data.results);
    setpPageCount(data.total_pages);
  };
  const getPage = async (e) => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a85944df0c2c90e9221e1d64fd0e1b74&language=ar-US&page=${e}`
    );
    setMovies(data.results);
    setpPageCount(data.total_pages);
  };
  useEffect(() => {
    getAllMovies();
  }, []);

  const search = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=a85944df0c2c90e9221e1d64fd0e1b74&language=en-US&query=${word}`
      );
      setMovies(data.results);
      setpPageCount(data.total_pages);
    }
  };

  return (
    <>
      <div className="font color-body">
        <Nav search={search} />
        <Container>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Movies
                    movies={movies}
                    getPage={getPage}
                    pageCount={pageCount}
                  />
                }
              />
              <Route path="/movie/:id" element={<MoviesDetails/>}/>
             
            </Routes>
          </BrowserRouter>
        </Container>
      </div>
    </>
  );
};

export default App;
