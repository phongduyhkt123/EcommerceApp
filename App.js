import { StyleSheet } from "react-native";
import { NativeBaseProvider, Box, Text, StatusBar } from "native-base";
import LoginScreen from "./src/Screens/LoginScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from "./src/Navigations/BottomNav";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import store from "./src/Stores/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={true} />
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Bottom" component={BottomNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
