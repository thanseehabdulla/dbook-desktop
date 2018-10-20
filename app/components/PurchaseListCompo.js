// @flow
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Counter.css';

type Props = {};

export default class PurchaseListCompo extends Component<Props> {
  props: Props;

  state={
      logout:false,
      name:''
  }

  increment = ()=>{

  }



  render() {
    return (
      <div className={styles.container} data-tid="dashboard">
          <div className={styles.backButton} data-tid="backButton">
              <Link to={routes.DASHBOARD}>
                  <i className="fa fa-arrow-left fa-3x" />
              </Link>
          </div>

          <div style={{textAlign:'center'}}>
            <h1>MENU : Welcome, {localStorage.getItem('name')?localStorage.getItem('name'):'User'}</h1>





        </div>




      </div>
    );
  }
}
