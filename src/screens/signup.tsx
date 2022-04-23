import React, { FC, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { InputComponent } from "../components";
const App: FC = () => {
  const userDets = {
    username: "",
    email: "",
    password: "",
  };

  const [user, setUser] = useState(userDets);
  const handleOnChangeText = (e: any, id: any) => {
    setUser((prevState) => ({
      ...prevState,
      [id]: e,
    }));
    console.log(user);
  };
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <InputComponent
        placeholder="Username"
        onChangeText={(e) => handleOnChangeText(e, "username")}
      />
      <InputComponent
        placeholder="Email"
        onChangeText={(e) => handleOnChangeText(e, "email")}
      />
      <InputComponent
        placeholder="Password"
        onChangeText={(e) => handleOnChangeText(e, "password")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
