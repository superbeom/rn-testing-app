import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import colors from "../constants/colors";

const StartGameScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          maxLength={2}
          autoCapitalize={"none"}
          autoCorrect={false}
          keyboardType={"number-pad"}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title={"Reset"} onPress={() => {}} color={colors.accent} />
          </View>
          <View style={styles.button}>
            <Button
              title={"Confirm"}
              onPress={() => {}}
              color={colors.primary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: "40%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default StartGameScreen;
