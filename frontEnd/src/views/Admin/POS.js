import React from "react";
import '../../App.scss';
import Navbar from '../../components/layout/admin/Navbar';
import Sidebar from '../../components/layout/admin/Sidebar';
import POS from "../../components/Admin/POS";

const POSView = () => {

  return (
    <>
      <div className="container-scroller">
      <Navbar />
        <div className="page-body-wrapper">
        <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper bg-white">
              <POS /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default POSView;
