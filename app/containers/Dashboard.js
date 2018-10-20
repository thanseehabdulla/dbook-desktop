// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import DashboardCompo from "../components/DashboardCompo";

type Props = {};

export default class Dashboard extends Component<Props> {
  props: Props;

  render() {
    return <DashboardCompo />;
  }
}
