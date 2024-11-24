import { Text, TouchableOpacity, View } from "react-native";

interface WidgetProps {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
}

export const Widget: React.FC<WidgetProps> = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ elevation: 2 }}
      className="rounded-xl bg-[#ffedd5] flex-row p-4 items-center"
    >
      <View className="gap-4 flex-row items-center">
        <View className="p-4 rounded-full bg-[#FDFDFD]">{icon}</View>
        <Text className="text-base font-body mt-2 text-[#1c1917] capitalize">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
