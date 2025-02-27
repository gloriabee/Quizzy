
import { BrowserRouter } from "react-router-dom";
import Nav from "./components/Navigation/Nav";
import Router from "./pages/router";


const App = () => {

  return (
    <div>
        
        <BrowserRouter>
          <Nav/>
          <Router/>
        </BrowserRouter>
       
      
    </div>
     
      
    
  );
};

export default App;