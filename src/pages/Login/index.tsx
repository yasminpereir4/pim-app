import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  const { navigate } = useNavigation();

  return (
    <View className="flex-1 bg-[#f97316] p-6">
      <View className="justify-center items-center flex-1 ">
        <Image alt="" source={require("../../assets/newlogo.png")} />

        <Text className="text-4xl mr-auto font-title text-white mt-6">
          FarmTech
        </Text>
        <Text className="text-2xl mr-auto font-title text-white mt-4">
          O melhor do agro na palma da sua mão.
        </Text>
      </View>
      <View className="mt-auto">
        <TouchableOpacity
          onPress={() => navigate("Login")}
          className="rounded-full bg-white px-4 py-4 mt-4"
        >
          <Text className="text-lg font-body text-[#f97316] text-center">
            Começar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
