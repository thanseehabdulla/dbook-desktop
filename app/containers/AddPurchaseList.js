// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import DashboardCompo from "../components/DashboardCompo";
import PurchaseListCompo from "../components/PurchaseListCompo";
import AddPurchaseListCompo from "../components/AddPurchaseListCompo";

type Props = {};

export default class AddPurchaseList extends Component<Props> {
  props: Props;

  render() {
    return <AddPurchaseListCompo />;
  }
}
