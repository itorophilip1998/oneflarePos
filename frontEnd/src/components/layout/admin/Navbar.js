import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

class Navbar extends Component {
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }
  toggleRightSidebar() {
    document.querySelector('.right-sidebar').classList.toggle('open');
  }
  toggler(){
    document.body.classList.toggle('sidebar-icon-only') 
  }

  render () {
  this.toggler();

    return (

      <nav className="navbar default-layout-navbar shadow-sm col-lg-12 col-12 p-0 py-1  fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/"><img src={require('../../../assets/images/onFlare/Logo/logo.svg')} alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../../assets/images/onFlare/Logo/logo-mini.svg')} className="logo" /></Link>
        </div>
    
        <div className="navbar-menu-wrapper d-flex align-items-stretch"> 
        <button  className=" navbar-toggler   mt-1 btn-transparent border-0 btn-lg  align-self-start" type="button" onClick={ this.toggler}>
              <span className="mdi mdi-menu"></span>
            </button>
          <div className="search-field d-none d-md-block">
            <form className="d-flex align-items-center h-100" action="#">
              <div className="input-group"> 
                  <i className="input-group-text border-0 mdi mdi-magnify search mcolor"></i> 
                <input style={{backgroundColor: '#EEF6FF',width:'350px'}} type="text" className="form-control border-0 pl-5 pr-3 rounded-pill " placeholder=""/>
              </div>
            </form>
          </div>
          <ul className='navbar-nav' style={{marginLeft: '40px'}}>
          <li className='nav-item'>
          <button className="btn btn-primary px-3  shadow-sm  align-self-center rounded-pill" type="button">
            <small className="mdi mdi-cart-outline"> <span>Shop</span> </small>
          </button>
          </li>
          </ul>
          <ul className="navbar-nav navbar-nav-right">
            
          <li className="nav-item nav-link"> 
            </li>
            <li className="nav-item">
              <Dropdown alignRight>
                <Dropdown.Toggle className="nav-link count-indicator">
                  <i className="mdi mdi-bell-outline"></i>
                  <span className="count-symbol bg-danger"></span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu navbar-dropdown preview-list">
                  <h6 className="p-3 mb-0"><Trans>Notifications</Trans></h6>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="mdi mdi-calendar"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><Trans>Event today</Trans></h6>
                      <p className="text-gray ellipsis mb-0">
                      <Trans>Just a reminder that you have an event today</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="mdi mdi-settings"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><Trans>Settings</Trans></h6>
                      <p className="text-gray ellipsis mb-0">
                      <Trans>Update dashboard</Trans>
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <Dropdown.Item className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="mdi mdi-link-variant"></i>
                      </div>
                    </div>
                    <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                      <h6 className="preview-subject font-weight-normal mb-1"><Trans>Launch Admin</Trans></h6>
                      <p className="text-gray ellipsis mb-0">
                      <Trans>New admin wow</Trans>!
                      </p>
                    </div>
                  </Dropdown.Item>
                  <div className="dropdown-divider"></div>
                  <h6 className="p-3 mb-0 text-center cursor-pointer"><Trans>See all notifications</Trans></h6>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            
            <li className="nav-item nav-profile " >
            <span class="badge badge-pill badge-primary m-0 p-0">

              <Dropdown alignRight >
                <Dropdown.Toggle className="nav-link pb-2" style={{height:'50px'}}>
                  <div className="nav-profile-img shadow">
                    <img  src={require("../../../assets/images/faces/face1.jpg")} alt="user"/> 
                  </div>

                  <div className="nav-profile-text">
                    <p className="mb-1 text-black" style={{marginTop:"10px"}}><Trans>Timothy</Trans></p>
                  </div> 
                </Dropdown.Toggle>

                <Dropdown.Menu className="navbar-dropdown">
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-cached mr-2 text-success"></i>
                    <Trans>Activity Log</Trans>
                  </Dropdown.Item>
                  <Dropdown.Item href="!#" onClick={evt =>evt.preventDefault()}>
                    <i className="mdi mdi-logout mr-2 text-primary"></i>
                    <Trans>Signout</Trans>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </span>
            </li>
            <li className="nav-item settings ml-4">
            <i className="mdi mdi-settings"></i>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
