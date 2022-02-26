import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    }); 
  }
  
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas dbg" id="sidebar" style={{minHeight:"97vh"}}>
       
        <ul className="nav p-0 pt-3 w-100 get"> 
        
          <li className={ this.isPathActive('/dashboard') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-home-outline menu-icon"></i>
              <span className="menu-title"><Trans> Home</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/pos/confirm/sales') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/pos/confirm/sales">
              <i className="mdi mdi-dns menu-icon"></i>
              <span className="menu-title"><Trans> Point of Sales</Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/dashboard') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-shopping menu-icon"></i>
              <span className="menu-title"><Trans> Sales </Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/pos') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/pos">
              <i className="mdi mdi-cart-outline menu-icon"></i>
              <span className="menu-title"><Trans> Purchases </Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/dashboard') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              <span className="menu-title"><Trans> Inventory </Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/dashboard') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-credit-card menu-icon"></i>
              <span className="menu-title"><Trans> Financial Overview </Trans></span>
            </Link>
          </li>

          <li className={ this.isPathActive('/dashboard') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/dashboard">
              <i className="mdi mdi-file-chart menu-icon"></i>
              <span className="menu-title"><Trans> Report </Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item' : 'nav-item' }>
            <Link className="nav-link" to="/customers">
              <i className="mdi mdi-account-multiple menu-icon"></i>
              <span className="menu-title"><Trans> Custormers </Trans></span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);