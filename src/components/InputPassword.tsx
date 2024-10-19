import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { InputText, InputTextProps } from "./InputText";

interface InputPasswordProps extends InputTextProps {}

export const InputPassword: React.FC<InputPasswordProps> = props => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="relative">
      <InputText {...props} className="pr-11" secureTextEntry={!showPassword} />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        className="absolute right-3 top-3.5"
      >
        <Feather
          name={showPassword ? "eye-off" : "eye"}
          size={24}
          className="object-contain"
          color="#8C8A93"
        />
      </TouchableOpacity>
    </View>
  );
};
