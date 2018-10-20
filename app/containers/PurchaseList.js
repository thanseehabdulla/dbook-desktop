// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import DashboardCompo from "../components/DashboardCompo";
import PurchaseListCompo from "../components/PurchaseListCompo";

type Props = {};

export default class PurchaseList extends Component<Props> {
  props: Props;

  render() {
    return <PurchaseListCompo />;
  }
}
