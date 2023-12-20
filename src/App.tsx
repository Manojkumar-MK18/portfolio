import React from "react";
import "./App.css";
import Home from "./components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{  
font-family: 'Poppins', sans-serif; 
}
`;

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
