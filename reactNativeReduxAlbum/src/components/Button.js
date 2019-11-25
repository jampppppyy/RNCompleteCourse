import React from "react";
import { View, Text, TouchableOpacity, TouchableHighlight } from "react-native";

const Button = ({ onPress, children }) => {
  const { button, text } = styles;
  return (
    <View>
      <TouchableOpacity style={button} onPress={onPress}>
        <Text style={text}>{children}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  text: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600",
    paddingVertical: 10
  },
  button: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
};
export default Button;
