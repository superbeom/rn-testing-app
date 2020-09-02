import React from "react";
import { StyleSheet, View, Text } from "react-native";

import TextStyle from "../constants/texts";
import colors from "../constants/colors";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={TextStyle.titleText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
