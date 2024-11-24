import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import { GoBackButton } from "../../components/GoBackButton";

interface ContactProps {}

export const Contact: React.FC<ContactProps> = () => {
  const { goBack } = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <GoBackButton onPress={() => goBack()} />
      <View className="p-6 mt-20">
        <Text className="text-[#fb923c] font-title text-3xl capitalize">
          Contato
        </Text>
        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          📞 Telefone: (11) 1234-5678
        </Text>
        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          ✉️ E-mail: contato@farmtech.com
        </Text>
        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          🌐 Site: www.farmtech.com
        </Text>
        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          📍 Endereço: Rua Verde Sustentável, 456 - Bairro AgroTech, São Paulo -
          SP
        </Text>
        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          📱 Redes Sociais:
        </Text>
        <Text className="text-base text font-body text-[#1c1917]">
          - Instagram: @farmtech
        </Text>
        <Text className="text-base text font-body text-[#1c1917]">
          - Facebook: FarmTech Oficial
        </Text>
        <Text className="text-base text font-body text-[#1c1917]">
          - LinkedIn: FarmTech
        </Text>

        <Text className="text-base text font-body mt-2 text-[#1c1917]">
          📌 Horário de Atendimento:
        </Text>
        <Text className="text-base text font-body text-[#1c1917]">
          Segunda a Sexta: 08h às 18h
        </Text>
        <Text className="text-base text font-body text-[#1c1917]">
          Sábados: 08h às 12h
        </Text>
      </View>
    </View>
  );
};
