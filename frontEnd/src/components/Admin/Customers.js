import React  from 'react'
import '../../App.scss';  
import { Link } from "react-router-dom";


const CreatCustomer=()=> { 
   
  return ( 
    <div className='m-0 '> 
      <h6  className=" mb-4 col-12"><span>
              <i className="mdi mdi-account-multiple "></i>  
            </span> Customers </h6>  

          <div className=" heads shadow-sm border h-75  p-3"> 
            <div className="  text-right  ">
              <Link to='/create-customers' className="btn btn-primary mr-2 r4 text-white btn-sm p-2 px-4" > Add Customer </Link>
            </div>
            <hr className='shadow mt-0 pt-0 mt-2'  />
            <div className="body">
             <div className="header text-right">
             <span className="mdi db-query mdi-magnify"></span>
              <input type="text" className='db-search pl-4' />
             </div>
            

            <div className="views mt-3 shadow-sm rounded-lg">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <span className="mdi mdi-pencil btn btn-primary text-white btn-sm mx-1 r4"></span>
                  <span className="mdi mdi-credit-card btn btn-warning text-white btn-sm mx-1 r4"></span>
                  <span className="mdi mdi-delete btn btn-danger text-white btn-sm mx-1 r4"></span>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <span className="mdi mdi-pencil btn btn-primary text-white btn-sm mx-1 r4"></span>
                  <span className="mdi mdi-credit-card btn btn-warning text-white btn-sm mx-1 r4"></span>
                  <span className="mdi mdi-delete btn btn-danger text-white btn-sm mx-1 r4"></span>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td >Larry the Bird</td>
                <td >Pepsi</td>
                <td>@twitter</td>
                <td>
                  <span className="mdi mdi-pencil btn btn-primary text-white btn-sm mx-1 r4"></span>
                  <span className="mdi mdi-credit-card btn btn-warning text-white btn-sm mx-1 r4"></span>
                  <span className="mdi mdi-delete btn btn-danger text-white btn-sm mx-1 r4"></span>
                </td>
              </tr>  
            </tbody>
          </table>
            </div>
              
            </div>
            

             
          </div>   
       
    </div>
  )
}

export default CreatCustomer; 