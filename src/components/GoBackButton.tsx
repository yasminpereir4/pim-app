import Feather from "@expo/vector-icons/Feather";

import { TouchableOpacity } from "react-native";

interface GoBackButtonProps {
  onPress: () => void;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#f97316",
      }}
      className="z-10 top-[40px] left-[20px] w-12 h-10 rounded-full items-center justify-center absolute"
    >
      <Feather name="arrow-left" size={24} color="white" />
    </TouchableOpacity>
  );
};
