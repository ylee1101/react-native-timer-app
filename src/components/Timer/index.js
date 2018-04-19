import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../Button";

class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.upperView}>
            <Text style={styles.time}>5:00 PM</Text>
        </View>

        <View style={styles.lowerView}>
            <Button iconName="play-circle" onPress={() => alert("it works")} />
            <Button iconName="stop-circle" onPress={() => alert("it works")} />
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