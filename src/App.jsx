import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import {Home }from "../src/Components/Home/Home";
import {Footer} from "../src/Components/Footer/Footer";
import { Login } from "./Components/Login/Login";
import { AuthPage } from "./Page/AuthPage/AuthPage";
import { Toaster } from "react-hot-toast";

export const App = () => {
  return (
    <>
      <AuthPage/>
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  );
};

export default App;
