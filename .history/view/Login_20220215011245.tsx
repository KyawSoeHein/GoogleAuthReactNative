import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Button, View } from "react-native";

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
    <View>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
};

export default Login;
