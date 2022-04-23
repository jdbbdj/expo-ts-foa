import React, { FC, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as firebaseauth from "firebase/auth";
import AppStack from "./appstack";
import AuthStack from "./authstack";

const MainNav: FC = () => {
  const [user, setUser] = useState<any>(null);
  const bootstrap = () => {
    const authCheck = firebaseauth.getAuth().onAuthStateChanged((_user) => {
      if (_user) {
        setUser(_user);
      }
    });
  };

  useEffect(() => {
    bootstrap();
  }, []);

  return (
    <NavigationContainer>
      {user !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default MainNav;
