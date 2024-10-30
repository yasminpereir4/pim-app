import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Text, View } from "react-native";
import { formatCurrency } from "../utils/formatCurrency";

const SERVICE_CARD_WIDTH = 263;

interface ProductCardLargeProps {
  image: string;
  price: number;
  product: string;
  quantity: number;
  description: string;
}

export const ProductCardLarge: React.FC<ProductCardLargeProps> = ({
  price,
  image,
  product,
  quantity,
  description,
}) => {
  return (
    <View className="p-4 rounded-xl bg-[#e7e5e4] h-auto mb-4 w-full">
      <View className="flex-row justify-between mt-1.5 mb-2">
        <Text className="text-base font-medium text-[#1c1917] capitalize">
          {product}
        </Text>
        <MaterialIcons name="sell" size={24} color="#f97316" />
      </View>
      <View className="justify-center items-center rounded-xl  bg-white">
        <Image width={150} height={150} source={{ uri: image }} />
      </View>
      <Text className="mt-2 text-base font-normal text-[#1c1917] capitalize">
        Preço: {formatCurrency(price)}
      </Text>
      <Text className="text-base font-normal text-[#1c1917] capitalize">
        Quantidade: {quantity}
      </Text>

      <Text className="text-base font-normal text-[#1c1917] capitalize">
        {description}
      </Text>
    </View>
  );
};
