"use strict";

import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Image } from "react-native";

const CustomMarker = () => {
  return (
    <Image
      style={styles.image}
      source={
        this.props.pressed ? require("./ruby.png") : require("./diamond.png")
      }
      resizeMode="contain"
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40
  }
});

CustomMarker.propTypes = {
  pressed: PropTypes.bool
};

module.exports = CustomMarker;
