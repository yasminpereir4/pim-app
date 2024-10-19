import { createStackNavigator } from "@react-navigation/stack";
import { Index } from "../pages/Login";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Login/Register";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
