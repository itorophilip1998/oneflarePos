import React from "react";
import '../../App.scss';
import Navbar from '../../components/layout/admin/Navbar';
import Sidebar from '../../components/layout/admin/Sidebar';
import ConfirmSales from "../../components/Admin/ConfirmSales";

const ConfirmSalesView = () => {

  return (
    <>
      <div className="container-scroller">
      <Navbar />
        <div className="page-body-wrapper">
        <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper bg-white">
              <ConfirmSales />
              {/* <SettingsPanel /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ConfirmSalesView;
