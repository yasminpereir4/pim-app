import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthStack } from "./AuthStack";
import { HomeStack } from "./HomeStack";

const Tab = createBottomTabNavigator();

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const isAuthenticated = useState(false);

  if (isAuthenticated) {
    return <AuthStack />;
  }
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#FFFFFF",
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: "#FB923C",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -8,
          marginBottom: 7,
          fontWeight: "400",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
