import React, { createContext } from "react";
import { useState } from "react";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Sign Up";
import MoviesPage from "./Pages/MoviesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesData from "./data.json";

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
  setLoginIn: () => {},
  DataMovies: [],
  setDataMovies: () => {},
  SearchMovieValue: "",
  setSearchMovieValue: () => {},
});
interface MyContextType {
  EmailAddress: string;
  Password: string;
  ShowError: boolean;
  LoginIn: boolean;
  RepeatPassword: string;
  DataMovies: Movie[];
  SearchMovieValue: string;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
  setLoginIn: React.Dispatch<React.SetStateAction<boolean>>;
  setDataMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  setSearchMovieValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function Layout() {
  const [EmailAddress, setEmailAddress] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [LoginIn, setLoginIn] = useState<boolean>(false);
  const [ShowError, setShowError] = useState<boolean>(false);
  const [RepeatPassword, setRepeatPassword] = useState("");
  const [DataMovies, setDataMovies] = useState<Movie[]>(MoviesData);
  const [SearchMovieValue, setSearchMovieValue] = useState<string>("");

  console.log(DataMovies);
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
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
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
