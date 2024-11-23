import { View } from "react-native";

interface BackgroundCircleIconNavigatorProps {
  focused?: boolean;
  children?: React.ReactNode;
}

export const BackgroundCircleIconNavigator: React.FC<
  BackgroundCircleIconNavigatorProps
> = ({ focused, children }) => {
  return (
    <View
      style={{
        backgroundColor: focused ? "#fb923c" : undefined,
      }}
      className="w-[52px] h-[52px] items-center rounded-full justify-center"
    >
      {children}
    </View>
  );
};
