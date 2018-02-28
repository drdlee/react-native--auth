import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './src/component/common';
import LoginForm from './src/component/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDjeA01PkmD6VYPpoqDoP3N6WzTuM-zh4k',
      authDomain: 'rn-auth-c8628.firebaseapp.com',
      databaseURL: 'https://rn-auth-c8628.firebaseio.com',
      projectId: 'rn-auth-c8628',
      storageBucket: 'rn-auth-c8628.appspot.com',
      messagingSenderId: '507444150307'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Logout
            </Button>
          </CardSection>);
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Whaddapp?" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
