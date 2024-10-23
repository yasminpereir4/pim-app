import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthContextProvider } from "./src/contexts/AuthContext";
import { Routes } from "./src/routes";

const queryClient = new QueryClient();

export default function App() {
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
