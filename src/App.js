import PageConnexion from "./pages/PageConnexion"
import PageHome from "./pages/PageHome"
import { BrowserRouter, Route } from "react-router-dom";
import PageSearch from "./pages/PageSearch";
import RegisterChildForm from "./pages/RegisterChildForm";
import Child from "./pages/Child";




const App = ()=>{
  return (

   // <Header/>
   

    <BrowserRouter>

    
    <Route exact path="/" component={PageConnexion} />
    <Route path="/PageHome" component={PageHome} />
    <Route path="/PageSearch" component={PageSearch} />
    <Route path="/Child" component={Child} />
    <Route path="/RegisterChildForm" component={RegisterChildForm} />
    
    
      
        </BrowserRouter>
    
  )
}
export default App
