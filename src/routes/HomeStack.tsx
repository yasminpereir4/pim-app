import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";
import { AllProducts } from "../pages/Home/AllProducts";
import { Contact } from "../pages/Home/Contact";
import { ProductById } from "../pages/Home/ProductById";
import { Purpose } from "../pages/Home/Purpose";
import { TermsOfUse } from "../pages/Home/TermsOfUse";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Purpose" component={Purpose} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
      <Stack.Screen name="AllProducts" component={AllProducts} />
      <Stack.Screen name="ProductById" component={ProductById} />
    </Stack.Navigator>
  );
}
