import { createGlobalStyle } from "styled-components";
import { Home, Footer, About, Header, Project } from "./components";
import { Route, Routes } from "react-router"; 

export const GlobalStyle = createGlobalStyle`
body{  
  font-family: 'Inter', sans-serif;  font-family: 'Fira Code', monospace;
}
 
`;

// const cursor: any = document.querySelector(".cursor");

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX;
//   let y = e.pageY;

//   cursor.style.top = `${y}px`;
//   cursor.style.left = `${x}px`;
// });

function App() {
  return (
    <>
      {/* <div className="cursor"></div> */}
      <Header />
      <GlobalStyle />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/project"} element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
