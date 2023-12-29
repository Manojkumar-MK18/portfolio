import { createGlobalStyle } from "styled-components";
import { Home, Footer } from "./components";

export const GlobalStyle = createGlobalStyle`
body{  
  font-family: 'Inter', sans-serif; 
}
`;

function App() {
  return (
    <>
      <Home />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
