import { BrowserRouter, Route } from "react-router-dom";

import Child from "./Child";
import ChildFamily from "./ChildFamily";
import ChildGuardian from "./ChildGuardian";

const RegisterChildForm = () => {
  return (
    <>
      <h1 className="title">ENREGISTREMENT ENFANT</h1>
    
    <Child/>
    </>
  );
};

export default RegisterChildForm;
