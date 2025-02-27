
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Router from "./pages/router";


const App = () => {

  return (
    <>
        
        <BrowserRouter>
        <Nav/>
          <Router/>
        </BrowserRouter>
       
      
    </>
     
      
    
  );
};

export default App;