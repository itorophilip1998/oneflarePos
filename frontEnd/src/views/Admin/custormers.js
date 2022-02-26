import React from "react";
import '../../App.scss';
import Customer from "../../components/Admin/Customers";
import Navbar from '../../components/layout/admin/Navbar';
import Sidebar from '../../components/layout/admin/Sidebar'; 

const custormers = () => {
  return (
    <>
      <div className="container-scroller">
      <Navbar />
        <div className="page-body-wrapper">
        <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper bg-white" >
              <Customer/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default custormers;





