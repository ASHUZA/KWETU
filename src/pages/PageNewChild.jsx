import { Link } from "react-router-dom";
import "./../scss/PageNewChild.scss";
const PageNewChild = () => {
  return (
    <>
      <div className="pagenewchild">
          <div className="container">
        <div className="titre">
          <h2>ENREGISTREMENT ENFANT</h2>
        </div>
        <div className="newchild_box">
          <div className="box_child"></div>

          <div className="box_parents"></div>

          <div className="box_family"></div>
        </div>
      </div>
      </div>
    </>
  );
};
export default PageNewChild;
