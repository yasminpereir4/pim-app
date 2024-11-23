import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../pages/Profile";

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
