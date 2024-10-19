import AntDesign from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";

interface GoBackButtonProps {
  onPress: () => void;
}

export const GoBackButton: React.FC<GoBackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        zIndex: 100,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
      }}
      className="top-[40px] left-[20px] w-10 h-10 rounded-full items-center justify-center absolute"
    >
      <AntDesign name="arrowleft" size={22} color="#FB923C" />
    </TouchableOpacity>
  );
};
