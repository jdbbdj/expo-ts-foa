import React, { FC } from "react";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions, StyleSheet, View } from "react-native";
interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const { height, width } = Dimensions.get("screen");

const InputComponent: FC<Props> = (props) => {
  const { placeholder, onChangeText, secureTextEntry } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry || false}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.1,
    alignSelf: "center",
    backgroundColor: "#e3e3e3",
    borderRadius: 5,
    marginVertical: 10,
  },
  input: {
    padding: 15,
  },
});

export default InputComponent;
