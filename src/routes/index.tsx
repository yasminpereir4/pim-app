import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import { BackgroundCircleIconNavigator } from "../components/BackgroundCircleIconNavigator";
import { useAuthContext } from "../contexts/AuthContext";
import { AuthStack } from "./AuthStack";
import { HomeStack } from "./HomeStack";
import { ProfileStack } from "./ProfileStack";

const Tab = createBottomTabNavigator();

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <AuthStack />;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={2}
            style={StyleSheet.absoluteFill}
          />
        ),
        tabBarActiveTintColor: "#FFFFFF",
        tabBarStyle: {
          height: 80,
          elevation: 0,
          borderTopWidth: 0,
          shadowOpacity: 0,
          position: "absolute",
          backgroundColor: "#f97316",
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginTop: -8,
          marginBottom: 7,
          fontWeight: "400",
        },
        tabBarLabel: () => null,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <BackgroundCircleIconNavigator focused={focused}>
              <Entypo
                name="home"
                size={size}
                color={focused ? "#f97316" : "#FFFFFF"}
              />
            </BackgroundCircleIconNavigator>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ size, focused }) => (
            <BackgroundCircleIconNavigator focused={focused}>
              <Feather
                name="user"
                size={size}
                color={focused ? "#f97316" : "#FFFFFF"}
              />
            </BackgroundCircleIconNavigator>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
