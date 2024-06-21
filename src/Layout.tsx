/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext } from "react";
import { useState } from "react";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Sign Up";
import MoviesPage from "./Pages/MoviesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesData from "./data.json";
import Movies from "./Pages/Movies";
import TVSeries from "./Pages/TVSeries";
import BookMarked from "./Pages/Bookmarked";

export const MyContext = createContext<MyContextType>({
  EmailAddress: "",
  setEmailAddress: () => {},
  Password: "",
  setPassword: () => {},
  ShowError: false,
  setShowError: () => {},
  RepeatPassword: "",
  setRepeatPassword: () => {},
  LoginIn: false,
  BookmarkedMovies: [],
  setLoginIn: () => {},
  DataMovies: [],
  setDataMovies: () => {},
  SearchMovieValue: "",
  setSearchMovieValue: () => {},
  DataMoviesCopy: [],
  setDataMoviesCopy: () => {},
  setBookmarkedMovies: () => {},
});
interface MyContextType {
  EmailAddress: string;
  BookmarkedMovies: any[];
  Password: string;
  ShowError: boolean;
  LoginIn: boolean;
  RepeatPassword: string;
  DataMovies: Movie[];
  SearchMovieValue: string;
  DataMoviesCopy: Movie[];
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
  setLoginIn: React.Dispatch<React.SetStateAction<boolean>>;
  setDataMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setSearchMovieValue: React.Dispatch<React.SetStateAction<string>>;
  setDataMoviesCopy: React.Dispatch<React.SetStateAction<Movie[]>>;
  setBookmarkedMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

export default function Layout() {
  const [EmailAddress, setEmailAddress] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [LoginIn, setLoginIn] = useState<boolean>(false);
  const [ShowError, setShowError] = useState<boolean>(false);
  const [RepeatPassword, setRepeatPassword] = useState("");
  const [DataMovies, setDataMovies] = useState<Movie[]>(MoviesData);
  const [SearchMovieValue, setSearchMovieValue] = useState<string>("");
  const [DataMoviesCopy, setDataMoviesCopy] = useState<Movie[]>(MoviesData);
  const [BookmarkedMovies, setBookmarkedMovies] = useState<any>(
    JSON.parse(localStorage.getItem("bookmarked") as any)
  );

  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          DataMoviesCopy,
          BookmarkedMovies,
          setDataMoviesCopy,
          setBookmarkedMovies,
          SearchMovieValue,
          setSearchMovieValue,
          DataMovies,
          setDataMovies,
          EmailAddress,
          setEmailAddress,
          Password,
          setPassword,
          ShowError,
          setShowError,
          RepeatPassword,
          setRepeatPassword,
          LoginIn,
          setLoginIn,
        }}>
        <Routes>
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/" element={<Signup />} />
          <Route path="/Movies" element={<MoviesPage />} />
          <Route path="/TypeMovies" element={<Movies />} />
          <Route path="/TypeTvSeries" element={<TVSeries />} />
          <Route path="/TypeBookMarked" element={<BookMarked />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
