import React, { Component } from 'react';
import firebase from 'firebase';
import { Header } from './src/component/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjeA01PkmD6VYPpoqDoP3N6WzTuM-zh4k',
      authDomain: 'rn-auth-c8628.firebaseapp.com',
      databaseURL: 'https://rn-auth-c8628.firebaseio.com',
      projectId: 'rn-auth-c8628',
      storageBucket: 'rn-auth-c8628.appspot.com',
      messagingSenderId: '507444150307'
    });
  }
  render() {
    return (
      <Header headerText="What app?" />
    );
  }
}

export default App;
