import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import {useState} from 'react';
import "./KeshoPagination.scss"
    

export class KeshoPagination extends PureComponent {


    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            orgtableData: [],
            perPage: 15,
            currentPage: 0,
            searchTerm:""
        }

        this.handlePageClick = this.handlePageClick.bind(this);

    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice
		})
	
    }

   componentDidMount(){
        this.getData();
    }
    getData() {
        axios
            .get('https://jsonplaceholder.typicode.com/comments')
            .then(res => {
                var tdata = res.data;
                console.log('data-->'+JSON.stringify(tdata))
				 var slice = tdata.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.setState({
                    pageCount: Math.ceil(tdata.length / this.state.perPage),
                    orgtableData : tdata,
                    tableData:slice
                })
            });
    }


    render() {


    

        return (
            <div className="d-flex flex-column">
              
              
               <input type="text" 
               className="form-control-search"
               placeholder="Search..."
               onChange={(event) => {
                   
                this.setState({
                    searchTerm: event.target.value
                })
                
               }}
               />

                 



                 <div className="col-sm-12">
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
                          this.state.tableData.filter((tdata)=> {
                              if ( this.state.searchTerm == "") {
                                  return tdata
                              } else if (tdata.name.toLowerCase().includes( this.state.searchTerm.toLowerCase())) {
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
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
            </div>
        )
    }
}

export default KeshoPagination
