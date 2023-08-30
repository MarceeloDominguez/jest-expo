import React from "react";
import { Button } from "react-native";

export default function MyButton({ ...props }) {
  return <Button title="Click Me" testID="ClickMe" onPress={props.onPress} />;
}
