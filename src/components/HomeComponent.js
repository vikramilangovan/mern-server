//CreateComponent.js

import React, { Component } from 'react';
import FaceBookComponent from './FaceBookComponent';

export default class CreateComponent extends Component {
 constructor() {
  super();
  this.state = {
   time: 'U can see the time here'
  }
 }
 render() {
  let d = new Date();
  setTimeout(() => { this.setState({ time: d.toString() }) }, 1000)
  return (
   <div style={{ marginTop: 50 }}>
    Welcome to MERN CRUD Operation - with auto reload
    <h3>MERN - MongoDB, Express.js, React.js, Node.js</h3>
    <h4>CRUD - Create, Read, Update, Delete</h4>
    <div>
     <h3>RealTime is : {this.state.time}</h3>
    </div>
    <FaceBookComponent />
   </div>
  );
 }
}