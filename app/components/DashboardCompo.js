// @flow
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Counter.css';

type Props = {};

export default class DashboardCompo extends Component<Props> {
  props: Props;

  state={
      logout:false,
      purchase:false,
      addpurchase:false,
      sales:false,
      addsales:false,
      name:''
  }

  increment = ()=>{

  }

  logout=()=>{
      localStorage.setItem('name', "");
      localStorage.setItem('login', '');
      localStorage.setItem('userid', "");
      this.setState({logout:true})
  }

    purchase=()=>{

        this.setState({purchase:true})
    }

    addpurchase=()=>{

        this.setState({addpurchase:true})
    }

    sales=()=>{

        this.setState({sales:true})
    }

    addsales=()=>{

        this.setState({addsales:true})
    }

    constructor(props) {
        super(props);

        this.state={
            name:'',
            loader:false
        }


    }

    componentDidMount(){

    }

  render() {
    return (
      <div className={styles.container} data-tid="dashboard">
          {/*<div className={styles.backButton} data-tid="backButton">*/}
              {/*<Link to={routes.HOME}>*/}
                  {/*<i className="fa fa-arrow-left fa-3x" />*/}
              {/*</Link>*/}
          {/*</div>*/}
          {this.state.logout && <Redirect to="/"></Redirect>}
          {this.state.purchase && <Redirect to="/purchase"></Redirect>}
          {this.state.addpurchase && <Redirect to="/addpurchase"></Redirect>}
          {this.state.sales && <Redirect to="/sales"></Redirect>}
          {this.state.addsales && <Redirect to="/addsales"></Redirect>}
        <div style={{textAlign:'center'}}>
            <h1>MENU : Welcome, {localStorage.getItem('name')?localStorage.getItem('name'):'User'}</h1>

            <button
                className={styles.btn}
                onClick={this.purchase.bind(this)}
                data-tclass="btn"
                type="button"
            >
                PURCHASE LIST
            </button>
            <button
                className={styles.btn}
                onClick={this.addpurchase.bind(this)}
                data-tclass="btn"
                type="button"
            >
                ADD PURCHASE
            </button>
            <button
                className={styles.btn}
                onClick={this.sales.bind(this)}
                data-tclass="btn"
                type="button"
            >
                SALES LIST
            </button>
            <button
                className={styles.btn}
                onClick={this.addsales.bind(this)}
                data-tclass="btn"
                type="button"
            >
                ADD SALES
            </button>
            <button
                className={styles.btn}
                onClick={this.logout.bind(this)}
                data-tclass="btn"
                type="button"
            >

                LOG OUT
            </button>



        </div>




      </div>
    );
  }
}
