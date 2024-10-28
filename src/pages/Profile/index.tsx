import AntDesign from "@expo/vector-icons/AntDesign";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { TopMenu } from "../../components/TopMenu";
import { useAuthContext } from "../../contexts/AuthContext";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const { user, logout } = useAuthContext();

  function handleLogout() {
    Alert.alert("Atenção", "Deseja sair da conta?", [
      {
        text: "Voltar",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "Sair", onPress: () => logout(), style: "destructive" },
    ]);
  }

  return (
    <View className="flex-1 bg-white">
      <TopMenu />
      <View className="p-5">
        <View
          className="bg-[#fdba74] w-auto h-auto rounded-lg items-center justify-center"
          style={{ elevation: 2 }}
        >
          <View className="bg-[#ffedd5] mt-8 rounded-full w-40 items-center h-40 justify-center">
            <AntDesign name="user" size={80} color="#f97316" />
          </View>
          <View className="mt-10 mr-auto px-8">
            <View className="w-72 h-[0.2] bg-black" />
            <Text className="text-lg capitalize  font-medium text-white mt-4">
              Nome: {user?.nome}{" "}
            </Text>
            <Text className="text-lg font-medium text-white mt-4">
              Email: {user?.email}{" "}
            </Text>
            <Text className="text-lg capitalize  mb-8 font-medium text-white mt-4">
              Função: {user?.funcao}{" "}
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        className="p-5 absolute right-0 bottom-20 flex-1"
      >
        <AntDesign name="logout" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};
