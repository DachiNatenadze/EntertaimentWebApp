import { createContext } from "react";
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
  DataMovies: {
    title: "",
    thumbnail: {
      trending: {
        small: "",
        medium: "",
        large: "",
      },
      regular: {
        small: "",
        medium: "",
        large: "",
      },
    },
    year: 0,
    category: "",
    rating: "",
    isBookmarked: false,
    isTrending: false,
  },
});

interface MyContextType {
  EmailAddress: string;
  Password: string;
  ShowError: boolean;
  LoginIn: boolean;
  RepeatPassword: string;
  DataMovies: {
    title: string;
    thumbnail: {
      trending: {
        small: string;
        medium: string;
        large: string;
      };
      regular: {
        small: string;
        medium: string;
        large: string;
      };
    };
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  };
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
  setLoginIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Layout() {
  const [EmailAddress, setEmailAddress] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [LoginIn, setLoginIn] = useState<boolean>(false);
  const [ShowError, setShowError] = useState<boolean>(false);
  const [RepeatPassword, setRepeatPassword] = useState("");
  const [DataMovies, setDataMovies] = useState(MoviesData);

  console.log(DataMovies);
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          DataMovies
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
