import { Text, View } from "react-native";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { user } = useAuthContext();
  const { data } = useGetAllProducts();

  return (
    <View className="flex-1 p-6">
      <Text className="text-[#1c1917] font-light text-2xl mt-16 capitalize">
        Olá, {user?.nome}!
      </Text>

      {data?.dados.map(item => {
        return (
          <View>
            <Text>{item.produto}</Text>
            <Text>{item.descricao}</Text>
          </View>
        );
      })}
    </View>
  );
};
