import React, { useState } from "react";
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import "./PageSearch.scss";

function PageSearch() {
  const [users, setUsers] = useState(JsonData.slice(0, 100));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  // const displayUsers = users
  //   .slice(pagesVisited, pagesVisited + usersPerPage)
  //   .map((user) => {
  //     return (
  //       <div className="user">
  //         <h3>{user.firstName}</h3>
  //         <h3>{user.lastName}</h3>
  //         <h3>{user.email}</h3>
  //       </div>
  //     );
  //   });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="pagesearch-main">
      {/* {displayUsers} */}

      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>prenom</th>
              <th>Nom</th>
              <th>Sexe</th>
              <th>Poste</th>
              <th>Phone</th>
              <th>Type compte</th>
            </tr>
          </thead>
          <tbody>
            {users
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((user) => {
                return (
                  <>
                    <tr>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </table>
      </div>
      <ReactPaginate
        previousLabel={"Precedent"}
        nextLabel={"Suivant"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"active"}
        subContainerClassName={"pages pagination"}
                  
      />
    </div>
  );
}

export default PageSearch;
