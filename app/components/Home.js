// @flow
import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import routes from '../constants/routes';
import styles from './Home.css';
import * as api from './../api/api'

type Props = {};

class Home extends Component<Props> {
  props: Props;

    state = {
        username: '',
        password: '',
        login:false
    }

    changeValue(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        })
    }


    login() {
        const user = {
            username: this.state.username,
            password: this.state.password,
        }

        fetch(api.LOGIN_API, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                if (responseJson.status === 'success') {
                    localStorage.setItem('name', this.state.username);
                    localStorage.setItem('login', 'true');
                    localStorage.setItem('userid', (responseJson.userid).toString());
                    this.setState({login:true})


                } else {
                    // this.setState({loader: false})
                    alert(
                        'Login Failed'
                    )
                }
            })
            .catch((error) => {
                // this.setState({loader: false})
                alert(
                    'Login Failed'
                )
            });


    }

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div style={{textAlign:'center'}}>
            <h1>dBook</h1>
            {this.state.login && <Redirect to="/dashboard" />}
            <label>username: <input type="username" onBlur={this.changeValue.bind(this)} name="username"/></label><br/>

            <label>password: <input type="password" onBlur={this.changeValue.bind(this)} name="password"/></label><br/>

            <label><button onClick={this.login.bind(this)}>Login</button></label>

        </div>




      </div>
    );
  }
}

export default withRouter(connect(
    state => ({}),
    {}
)(Home));