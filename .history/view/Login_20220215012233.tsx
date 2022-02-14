import React, { FC } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, View, Text, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";

WebBrowser.maybeCompleteAuthSession();

const Login: FC<{ navigation: any }> = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "379185711737-nt4n9vh015c64dvhjre24hj4sjqn77a0.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      navigation.navigate("Dashboard");
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Button disabled={!request} title="Login with google" /> */}
      <TouchableRipple
        style={styles.loginButton}
        onPress={() => {
          promptAsync();
        }}
      >
        <Text style={{ color: "white", fontSize: 18, textAlign: "center" }}>
          Google Sign in
        </Text>
      </TouchableRipple>
    </View>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    width: "50%",
    backgroundColor: "rgb(9,113,249)",
    paddingHorizontal: 32,
    paddingVertical: 12,
    marginTop: 48,
    borderRadius: 32,
  },
});

export default Login;
