import { View } from "react-native";
import { TopMenu } from "../../components/TopMenu";
import { useAuthContext } from "../../contexts/AuthContext";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  const { user } = useAuthContext();

  return (
    <View className="flex-1 bg-white">
      <TopMenu text={`Olá, ${user?.nome}`} />
    </View>
  );
};
