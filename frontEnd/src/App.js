import React, { useRef } from "react";
import { Switch } from "react-router-dom";
import AppRoute from "./utils/AppRoute";
import ScrollReveal from "./utils/ScrollReveal";
import { BrowserRouter as Router } from 'react-router-dom';

// Layouts
import LayoutDefault from "./layouts/LayoutDefault";
import AdminLayout from "./layouts/AdminLayout";

// Views 
// Auth
import Login from "./views/Auth/Login";
import PasswordRecovery from "./views/Auth/PasswordRecovery";
import NotFound from "./views/NotFound";
import Registration from "./views/Auth/Registration";
import Dashboard from "./views/Admin/Dashboard";
import POS from "./views/Admin/POS";
import ConfirmSales from "./views/Admin/ConfirmSales";
import custormers from "./views/Admin/custormers";
import create_custormers from "./views/Admin/create_custormers";
/* eslint-disable */

const App = () => {
  // eslint-disable-next-line
  const childRef = useRef();

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Router>
        <Switch>
          <AppRoute exact path="/" component={Login} layout={LayoutDefault} />
          <AppRoute
            exact
            path="/login"
            component={Login}
            layout={LayoutDefault}
          />
           <AppRoute
            exact
            path="/password/recovery"
            component={PasswordRecovery}
            layout={LayoutDefault}
          />
           <AppRoute
            exact
            path="/registration"
            component={Registration}
            layout={LayoutDefault}
          />
          <AppRoute
            exact
            path="/dashboard"
            component={Dashboard}
            layout={AdminLayout}
          />

          <AppRoute
            exact
            path="/pos"
            component={POS}
            layout={AdminLayout}
          />

           <AppRoute
            exact
            path="/pos/confirm/sales"
            component={ConfirmSales}
            layout={AdminLayout}
          />
           <AppRoute
            exact
            path="/customers"
            component={custormers}
            layout={AdminLayout}
          />
           <AppRoute
            exact
            path="/create-customers"
            component= {create_custormers }
            layout={AdminLayout}
          />
          
          <AppRoute component={NotFound} layout={LayoutDefault} />
        </Switch>
        </Router>
      )}
    />
  );
};

export default App;
