import styled, { createGlobalStyle } from "styled-components";
import { Home, Footer, About, Header, Project } from "./components";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

export const GlobalStyle = createGlobalStyle`
body{  
  font-family: 'Inter', sans-serif;  font-family: 'Fira Code', monospace;
}
 
`;

export const LoaderWrapper = styled.div`
  background: rgb(15 23 42 / 1);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
`;

function App() {
  const [loadTimer, setLoadTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadTimer(true);
    }, 2000);
  });

  return (
    <>
      {!loadTimer ? (
        <LoaderWrapper>
          <div className="loader">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </LoaderWrapper>
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
