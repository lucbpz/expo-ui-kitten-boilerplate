import React, { useState } from "react";
import { mapping, light as lightTheme } from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import SignInScreen from "./screens/login";
import { AppNavigator } from "./containers/appNavigator";

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        {isSignedIn ? (
          <AppNavigator />
        ) : (
          <SignInScreen onSignIn={() => setIsSignedIn(true)} />
        )}
      </ApplicationProvider>
    </>
  );
};
