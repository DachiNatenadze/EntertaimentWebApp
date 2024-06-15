import { createContext } from "react";
import LoginPage from "./Pages/Login";
import Signup from "./Pages/Sign Up";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MyContext = createContext(undefined);

export default function Layout() {
  return (
    <BrowserRouter>
      <MyContext.Provider value={undefined}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}
