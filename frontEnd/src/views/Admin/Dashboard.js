import React from "react";
import '../../App.scss';
import Navbar from '../../components/layout/admin/Navbar';
import Sidebar from '../../components/layout/admin/Sidebar';
import Dashboard from "../../components/Admin/Dashboard";

const DashboardView = () => {

  return (
    <>
      <div className="container-scroller">
      <Navbar />
        <div className=" page-body-wrapper">
        <Sidebar />
          <div className="main-panel">
            <div className="content-wrapper bg-white"  >
              <Dashboard /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardView;
