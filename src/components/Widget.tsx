import { Text, TouchableOpacity, View } from "react-native";

interface WidgetProps {
  icon: React.ReactNode;
  title: string;
}

export const Widget: React.FC<WidgetProps> = ({ icon, title }) => {
  return (
    <TouchableOpacity
      className="rounded-xl bg-[#ffedd5] flex-row p-4 items-center"
      style={{ elevation: 2 }}
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
