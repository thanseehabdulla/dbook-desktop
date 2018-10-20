/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Dashboard from './containers/Dashboard';
import CounterPage from './containers/CounterPage';
import PurchaseList from "./containers/PurchaseList";
import SalesList from "./containers/SalesList";
import AddPurchaseList from "./containers/AddPurchaseList";
import AddSalesList from "./containers/AddSalesList";

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
        <Route path={routes.DASHBOARD} component={Dashboard} />
        <Route path={routes.PURCHASE} component={PurchaseList} />
        <Route path={routes.ADDPURCHASE} component={AddPurchaseList} />
        <Route path={routes.SALES} component={SalesList} />
        <Route path={routes.ADDSALES} component={AddSalesList} />
        <Route path={routes.HOME} component={HomePage} />

    </Switch>
  </App>
);
