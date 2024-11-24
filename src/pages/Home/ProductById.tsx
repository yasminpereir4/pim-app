import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Text, View } from "react-native";
import { GoBackButton } from "../../components/GoBackButton";
import { formatCurrency } from "../../utils/formatCurrency";

export interface ProductByIdParams {
  title: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

interface ProductByIdProps {}

export const ProductById: React.FC<ProductByIdProps> = () => {
  const { goBack } = useNavigation();
  const { params } = useRoute();
  const { title, price, quantity, description, image } =
    params as ProductByIdParams;

  return (
    <View className="flex-1 bg-white">
      <GoBackButton onPress={() => goBack()} />

      <View className="justify-center items-center  mt-40 h-[260px]">
        <Image width={360} height={260} source={{ uri: image }} />
      </View>

      <View className="rounded-3xl bg-[#ffedd5] h-full p-4">
        <Text className="text-[#fb923c] font-title text-2xl capitalize">
          {title}
        </Text>
        <Text className="text-base font-body mt-2 text-[#1c1917] capitalize">
          {formatCurrency(price)}
        </Text>
        <Text className="text-base font-body mt-2 text-[#1c1917] capitalize">
          Disponível: {quantity}
        </Text>
        <Text className="text-base font-body mt-6 text-[#1c1917] capitalize">
          {description}
        </Text>
      </View>
    </View>
  );
};
