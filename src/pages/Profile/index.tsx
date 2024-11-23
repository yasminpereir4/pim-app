import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext";
import { getInitials } from "../../utils/getInitials";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const { user, logout } = useAuthContext();

  function handleLogout() {
    Alert.alert("Atenção", "Deseja sair da conta?", [
      {
        text: "Voltar",
        style: "cancel",
      },
      { text: "Sair", onPress: () => logout(), style: "destructive" },
    ]);
  }
  return (
    <View className="flex-1 bg-[#ffedd5]">
      <View className="w-full h-[210px] bg-[#fb923c] justify-center">
        <View className="flex-row items-center ml-5 justify-between">
          <View className="flex-row gap-5 ">
            <View className="bg-white rounded-full w-16 aspect-square justify-center items-center">
              <Text className="text-[#fb923c] font-bold text-xl">
                {getInitials(user!.nome)}
              </Text>
            </View>
            <View className="flex-col">
              <Text className="text-white font-semibold text-lg capitalize">
                {user!.nome}
              </Text>
              <Text className="text-white text-base">{user!.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="relative bottom-4 px-4 ">
        <View
          className="bg-[#FFF] rounded-lg w-full flex-row py-4 px-4 items-center"
          style={{ elevation: 4 }}
        >
          <MaterialIcons name="badge" size={24} color="#fb923c" />
          <Text className="text-base font-body mt-2 text-[#1c1917] ml-3 capitalize">
            Cargo: {user!.funcao}
          </Text>
        </View>
      </View>
      <View className="px-4">
        {/* <View
          style={{ elevation: 4 }}
          className="bg-white rounded-lg  w-full py-4 mb-4"
        >
          <View className="px-4 ml-3 flex-row gap-4">
            <Ionicons name="chatbubble" size={24} color="#fb923c" />
            <Text className="text-[#1c1917] font-medium text-lg">
              Comunicados
            </Text>
          </View>
        </View> */}
        {/* <View
          style={{ elevation: 4 }}
          className="bg-white rounded-lg  w-full py-4 mb-4"
        >
          <View className="px-4 ml-3 flex-row gap-4">
            <AntDesign name="exclamationcircle" size={24} color="#fb923c" />
            <Text className="text-[#1c1917] font-medium text-lg">Suporte</Text>
          </View>
        </View> */}
        <View
          style={{ elevation: 4 }}
          className="bg-[#FFF] rounded-lg w-full py-4 mb-4"
        >
          <TouchableOpacity
            onPress={handleLogout}
            className="px-4 ml-3 flex-row gap-4 items-center"
          >
            <MaterialIcons name="logout" size={30} color="#fb923c" />
            <Text className="text-base font-body text-[#1c1917] ml-3 capitalize">
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
