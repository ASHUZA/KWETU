import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {useState, useEffect} from 'react';
import "./KeshoPagination.scss"
    

export const KeshoPagination =()=>{

    const [state, setState]=useState(
        {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 15,
            currentPage: 0
        }
    )



 const   handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * state.perPage;

        setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            loadMoreData()
        });

    };

 const   loadMoreData=()=> {
		const data = state.orgtableData;
		
		const slice = data.slice(state.offset, state.offset + state.perPage)
		setState({
			pageCount: Math.ceil(data.length / state.perPage),
			tableData:slice
		})
	
    }

 useEffect(() => {
    getData();
 }, [])

  const  getData=()=> {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                var tdata = res.data;
                console.log('data-->'+JSON.stringify(tdata))
				 var slice = tdata.slice(state.offset, state.offset + state.perPage)
                setState({
                    pageCount: Math.ceil(tdata.length / state.perPage),
                    orgtableData : tdata,
                    tableData:slice
                })
            });
    }


        
    const [searchTerm, setSearchTerm] = useState(""); 

    

        return (
            <div>
               <input type="text" 
               placeholder="Search..."
               onChange={(event) => {
                   setSearchTerm(event.target.value);
               }}
               />


                 <div className="col-sm-6">
                <div className="table-wrapper">
                  <table  border="1" className="fl-table">
                    <thead>
                    <tr>
                    <th>Id</th>
                         <th>Name</th>
                         <th>Email</th>
                         {/* <th>Body</th> */}
                       
                      </tr>
                    </thead>
                    <tbody>
                    {
                          state.tableData.filter((tdata)=> {
                              if (searchTerm == "") {
                                  return tdata
                              } else if (tdata.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                  return tdata
                              }
                          }).map((tdata, i) => (
                                <tr>
                                    <td>{tdata.id}</td>
                                    <td>{tdata.name}</td>
                                    <td>{tdata.email}</td>
                                    {/* <td>{tdata.body}</td> */}
                                </tr>
                            
                          ))
                        }

                    </tbody>
                  </table>
                </div>
              </div>

                 <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    
}

export default KeshoPagination
