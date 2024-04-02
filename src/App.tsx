import { createGlobalStyle } from "styled-components";
import { Home, Footer, About, Header, Project } from "./components";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

export const GlobalStyle = createGlobalStyle`
body{  
  font-family: 'Inter', sans-serif;  font-family: 'Fira Code', monospace;
  position: relative;
}
 
`;

function App() {
  const [loadTimer, setLoadTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadTimer(true);
    }, 3000);
  });

  return (
    <>
      {!loadTimer ? (
        <h1 className="loader">
          <span>L</span>
          <span>O</span>
          <span>A</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </h1>
      ) : (
        <>
          <Header />
          <GlobalStyle />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/project"} element={<Project />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
