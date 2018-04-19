import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

formatTime = (time) => {
    let mins = Math.floor(time/60);
    time -= mins * 60
    let secs = parseInt(time % 60, 10);
    return `${mins < 10 ? `0${mins}` : mins} : ${secs < 10 ? `0${secs}` : secs}`
}

class Timer extends Component {

    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        console.log(`the current isPlaying is: ${currentProps.isPlaying} and the new isPlaying is ${nextProps.isPlaying}`);
        if (!currentProps.isPlaying && nextProps.isPlaying) {
            //start the interval
            // console.log('should start')
            const timerInterval = setInterval(() => {
                currentProps.addSecond()
            }, 1000);
            this.setState({
                timerInterval
            });
        } else if (currentProps.isPlaying && !nextProps.isPlaying) {
            //stop the interval
            // console.log('should stop')
            clearInterval(this.state.timerInterval); 
        }
    }

  render() {
    console.log("this.props", this.props);
    const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer, addSecond } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.upperView}>
          <Text style={styles.time}>{formatTime(timerDuration - elapsedTime)}</Text>
        </View>
 
        <View style={styles.lowerView}>
          {!isPlaying && (
            <Button iconName="play-circle" onPress={startTimer} />
          )}
          {isPlaying && (
            <Button iconName="stop-circle" onPress={restartTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "brown"
  },
  upperView: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lowerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 70,
    fontWeight: "100"
  }
});

export default Timer;
