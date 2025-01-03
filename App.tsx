import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

const queryClient = new QueryClient();

export default function App() {
  const [hasLoadedFonts] = useFonts({
    Poppins_700Bold,
    Poppins_500Medium,
    Poppins_300Light,
  });

  if (!hasLoadedFonts) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AuthContextProvider>
          <GestureHandlerRootView>
            <StatusBar
              translucent
              barStyle="light-content"
              backgroundColor="transparent"
            />
            <Routes />
          </GestureHandlerRootView>
        </AuthContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
