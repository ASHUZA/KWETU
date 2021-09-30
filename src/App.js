import PageConnexion from "./pages/PageConnexion"
import PageConnexion2 from "./pages/PageConnexion2"

import PageHome2 from "./pages/PageHome2"
import { BrowserRouter, Route } from "react-router-dom";
import PageSearch from "./pages/PageSearch";
import RegisterChildForm from "./pages/RegisterChildForm";
import Child from "./pages/Child";
import PageNewChild from "./pages/PageNewChild";
import HomeKesho from "./pages/HomeKesho";
import UserManagement from "./pages/UserManagement";
import UserCount from "./pages/UserCount";
import KeshoChildren from "./pages/KeshoChildren";
import KeshoChild from "./pages/KeshoChild";
import KeshoParents from "./pages/KeshoParents";
import KeshoChart from "./pages/KeshoChart";
import ReactStep from "./pages/ReactStep";
import KeshoChildFollow from "./pages/KeshoChildFollow";
import KeshoChildDetail from "./pages/KeshoChildDetail";
import KeshoPrint from "./pages/KeshoPrint";




const App = ()=>{
  return (

   

    <BrowserRouter>


    <Route exact path="/" component={PageConnexion2} /> 
    <Route exact path="/KeshoPrint" component={KeshoPrint} /> 
    <Route exact path="/KeshoChildDetail" component={KeshoChildDetail} /> 
    <Route exact path="/ReactStep" component={ReactStep} /> 
    <Route exact path="/KeshoChildFollow" component={KeshoChildFollow} /> 
    {/* <Route exact path="/ReactStep" component={ReactStep} />  */}
    <Route exact path="/KeshoChart" component={KeshoChart} /> 
    <Route exact path="/KeshoParents" component={KeshoParents} />    
    <Route exact path="/KeshoChildren" component={KeshoChildren} />    
    <Route exact path="/KeshoChild" component={KeshoChild} />
    <Route exact path="/UserCount" component={UserCount} /> 
    <Route exact path="/UserManagement" component={UserManagement} />
    <Route exact path="/HomeKesho" component={HomeKesho} />    
    <Route path="/PageHome" component={PageHome2} />
    <Route path="/PageSearch" component={PageSearch} />
    <Route path="/Child" component={Child} />
    <Route path="/PageNewChild" component={PageNewChild} />
   

        </BrowserRouter>
//     <Route path="/RegisterChildForm" component={RegisterChildForm} />
   
  )
}
export default App
