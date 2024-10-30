import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { AllProducts } from "../pages/Home/AllProducts";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
    </Stack.Navigator>
  );
}
