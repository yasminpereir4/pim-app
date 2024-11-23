import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { formatCurrency } from "../utils/formatCurrency";

const SERVICE_CARD_WIDTH = 263;

interface ProductCardProps {
  image: string;
  price: number;
  product: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  price,
  image,
  product,
}) => {
  const [favoritedProduct, setFavoritedProduct] = useState(false);

  return (
    <View
      className="px-4 py-2 rounded-xl  bg-[#ffedd5] h-full mb-4"
      style={{
        width: SERVICE_CARD_WIDTH,
        marginBottom: 10,
      }}
    >
      <View className="absolute top-0 right-0 z-10">
        <View className="bg-[#fdba74] rounded-bl-xl rounded-tr-xl w-[68px] h-[33px] items-center justify-center">
          <Text className="font-body text-sm text-[#1c1917] capitalize">
            {formatCurrency(price)}
          </Text>
        </View>
      </View>
      <View className="justify-center items-center w-full rounded-xl  bg-[#ffedd5]">
        <Image width={200} height={200} source={{ uri: image }} />
      </View>

      <Text className="text-base text-center font-body mt-2 text-[#1c1917] capitalize">
        {product}
      </Text>

      {favoritedProduct ? (
        <TouchableOpacity
          onPress={() => setFavoritedProduct(!favoritedProduct)}
        >
          <AntDesign name="hearto" size={24} color="#1c1917" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setFavoritedProduct(!favoritedProduct)}
        >
          <AntDesign name="heart" size={24} color="#1c1917" />
        </TouchableOpacity>
      )}
    </View>
  );
};
