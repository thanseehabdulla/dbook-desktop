// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import DashboardCompo from "../components/DashboardCompo";
import PurchaseListCompo from "../components/PurchaseListCompo";
import AddPurchaseListCompo from "../components/AddPurchaseListCompo";
import SalesListCompo from "../components/SalesListCompo";

type Props = {};

export default class SalesList extends Component<Props> {
  props: Props;

  render() {
    return <SalesListCompo />;
  }
}
