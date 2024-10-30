import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image, Text, View } from "react-native";
import { formatCurrency } from "../utils/formatCurrency";

const SERVICE_CARD_WIDTH = 263;

interface ProductCardProps {
  image: string;
  price: number;
  product: string;
  quantity: number;
  description: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  price,
  image,
  product,
  quantity,
  description,
}) => {
  return (
    <View
      className="px-4 py-2 rounded-xl  bg-[#e7e5e4] h-full mb-4"
      style={{
        width: SERVICE_CARD_WIDTH,
        marginBottom: 10,
      }}
    >
      <View className="flex-row justify-between  mt-1.5 mb-2">
        <Text className="text-base font-medium text-[#1c1917] capitalize">
          {product}
        </Text>
        <MaterialIcons name="sell" size={24} color="#f97316" />
      </View>
      <View className="justify-center items-center w-full rounded-xl  bg-white">
        <Image width={120} height={120} source={{ uri: image }} />
      </View>
      <Text className="text-base font-normal text-[#1c1917] capitalize">
        Preço: {formatCurrency(price)}
      </Text>
      <Text className="text-base font-normal text-[#1c1917] capitalize">
        Quantidade: {quantity}
      </Text>
      <Text
        numberOfLines={2}
        className="text-base font-normal text-[#1c1917] capitalize"
      >
        {description}
      </Text>
    </View>
  );
};
