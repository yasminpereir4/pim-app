import { Text, View } from "react-native";

interface TopMenuProps {
  text?: string;
}

export const TopMenu: React.FC<TopMenuProps> = ({ text }) => {
  return (
    <View
      style={{ elevation: 8 }}
      className="bg-[#f97316] items-center justify-center z-40 p-4 h-20 w-auto rounded-br-2xl rounded-bl-2xl"
    >
      {text && (
        <Text className="text-2xl capitalize mr-auto font-medium text-white mt-4">
          {text}
        </Text>
      )}
    </View>
  );
};
