// IndexComponent.js

import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class IndexComponent extends Component {

  constructor(props) {
    super(props);
    this.state = { serverports: [] };
    this.changeState = this.changeState.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
    axios.get('http://localhost:4200/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  changeState() {
    console.log("changeState");
    axios.get('http://localhost:4200/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  componentWillMount() {
    console.log('Component WILL Mount!');
    axios.get('http://localhost:4200/serverport')
      .then(response => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  componentWillReceiveProps(newProps) {
    console.log('Component WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }
  render() {
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Port</td>
            </tr>
          </thead>
          <tbody>
            {this.state.serverports.map((object, i) =>
              <TableRow obj={object} key={i} changeState={this.changeState} />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

  //  {this.tabRow()}