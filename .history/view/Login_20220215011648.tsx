import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "379185711737-nt4n9vh015c64dvhjre24hj4sjqn77a0.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Button
        disabled={!request}
        title="Login with google"
        onPress={() => {
          promptAsync();
        }}
      />
      <TouchableRipple>
        <Text style={{ color: "rgb(9,113,249)", fontSize: 18 }}>
          Login With Google
        </Text>
      </TouchableRipple>
    </View>
  );
};

export default Login;
