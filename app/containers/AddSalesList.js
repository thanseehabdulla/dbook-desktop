// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import DashboardCompo from "../components/DashboardCompo";
import PurchaseListCompo from "../components/PurchaseListCompo";
import AddSalesListCompo from "../components/AddSalesListCompo";

type Props = {};

export default class AddSalesList extends Component<Props> {
  props: Props;

  render() {
    return <AddSalesListCompo />;
  }
}
