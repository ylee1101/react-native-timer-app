import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Timer from './src/components/Timer';
import reducer from './src/reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    const store = createStore(reducer);

    console.log("STORE", store.getState());

    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

