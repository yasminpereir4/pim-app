import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { GoBackButton } from "../../components/GoBackButton";

interface PurposeProps {}

export const Purpose: React.FC<PurposeProps> = () => {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <GoBackButton onPress={() => goBack()} />

      <View className="p-6 mt-24">
        <Text className="text-[#fb923c] font-title text-3xl capitalize">
          Objetivo
        </Text>
        <Text className="text-base text font-body mt-6 text-[#1c1917]">
          {"   "} O objetivo do aplicativo é facilitar o acesso dos funcionários
          da fazenda urbana aos produtos frescos e de alta qualidade cultivados
          localmente.
        </Text>
        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          {"   "}Através do app, os colaboradores poderão adquirir itens como
          frutas, verduras, legumes e outros produtos da fazenda com descontos
          exclusivos, promovendo uma alimentação saudável, sustentável e
          acessível. Além disso, o aplicativo incentiva a valorização do
          trabalho realizado na fazenda, reforçando o vínculo entre os
          funcionários e os resultados de seus esforços no cultivo.
        </Text>
      </View>
    </View>
  );
};
