import { useNavigation } from "@react-navigation/native";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GoBackButton } from "../../components/GoBackButton";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1">
      <ImageBackground
        blurRadius={5}
        resizeMode="cover"
        className="w-full h-full blur-[10px]"
        source={require("../../assets/farm.png")}
      >
        <GoBackButton onPress={() => goBack()} />
        <View className="p-4 justify-center flex-1">
          <View
            className="rounded-2xl justify-center p-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <View className="items-center">
              <Image alt="" source={require("../../assets/logo.png")} />
            </View>

            <View className="flex-row mt-4">
              <Text className="text-[#505050] font-normal">
                Já possui conta?{" "}
              </Text>
              <Text className="text-[#FB923C] underline font-medium">
                {" "}
                Login
              </Text>
            </View>

            <View className="mt-5">
              <TouchableOpacity
                onPress={() => {}}
                className="rounded-2xl bg-[#FB923C] px-4 py-4 mt-4"
              >
                <Text className="text-lg font-medium text-[#FFFFFF] text-center">
                  Cadastrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
