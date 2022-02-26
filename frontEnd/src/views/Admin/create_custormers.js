import React from "react";
import '../../App.scss';
import CreatCustomer from "../../components/Admin/CreateCustomers";
import Navbar from '../../components/layout/admin/Navbar';
import Sidebar from '../../components/layout/admin/Sidebar'; 

const create_customers = () => {

  return (
    <>
      <div className="container-scroller">
      <Navbar />
        <div className="page-body-wrapper">
        <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper bg-white" >
              <CreatCustomer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default create_customers;





