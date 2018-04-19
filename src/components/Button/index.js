import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

Button = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity onPressOut={onPress}>
            <Icon name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    );
}

Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired //button onpress에 function이 있어야함  Timer/index.js 에서.
}

export default Button;






