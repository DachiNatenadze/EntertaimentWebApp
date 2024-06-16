import { createContext } from "react";
import { useState } from "react";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Sign Up";
import MoviesPage from "./Pages/MoviesPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MyContext = createContext<MyContextType>({
  EmailAddress: "",
  setEmailAddress: () => {},
  Password: "",
  setPassword: () => {},
  ShowError: false,
  setShowError: () => {},
  RepeatPassword: "",
  setRepeatPassword: () => {},
});

interface MyContextType {
  EmailAddress: string;
  Password: string;
  ShowError: boolean;
  RepeatPassword: string;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmailAddress: React.Dispatch<React.SetStateAction<string>>;
  setRepeatPassword: React.Dispatch<React.SetStateAction<string>>;
}

export default function Layout() {
  const [EmailAddress, setEmailAddress] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [ShowError, setShowError] = useState<boolean>(false);
  const [RepeatPassword, setRepeatPassword] = useState("");
  return (
    <BrowserRouter>
      <MyContext.Provider
        value={{
          EmailAddress,
          setEmailAddress,
          Password,
          setPassword,
          ShowError,
          setShowError,
          RepeatPassword,
          setRepeatPassword,
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
