import { createGlobalStyle } from "styled-components";
import { Home, Footer } from "./components";

export const GlobalStyle = createGlobalStyle`
body{  
  font-family: 'Inter', sans-serif;  
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
      <Home />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
