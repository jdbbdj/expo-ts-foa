import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Signup, Login } from "../screens";
const { Navigator, Screen } = createStackNavigator();

const AuthStack: FC = () => {
  return (
    <Navigator>
      <Screen name="signup" component={Signup} />
      <Screen name="login" component={Login} />
    </Navigator>
  );
};

export default AuthStack;
