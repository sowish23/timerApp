import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './component/Timer'
import reducer from './reducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

console.log(store.getState());

export default class App extends React.Component {
  render() {
    return (
      //provider는 스토어를 복사해서 children component에 넣음
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}
