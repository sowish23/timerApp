//데이터 보여주기만
//redux 작업은 하지 않음

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../Button';

class Timer extends Component {
  render() {
    const { isPlaying, elapsedTime, timerDuration } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.time}>25:00</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying &&
            <Button iconName="play-circle" onPress={() => alert('itworks')} />
          }
          {isPlaying &&
            <Button iconName="stop-circle" onPress={() => alert('itworks')} />
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CE0B25',
  },
  upper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  lower: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    color: '#fff',
    fontSize: 120,
    fontWeight: "100",
  }
});

export default Timer;