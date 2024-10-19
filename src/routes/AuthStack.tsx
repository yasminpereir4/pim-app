import { createStackNavigator } from "@react-navigation/stack";
import { Index } from "../pages/Login";

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Index" component={Index} />
    </Stack.Navigator>
  );
}
