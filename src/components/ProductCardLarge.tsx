import { Image, Text, View, ViewProps } from "react-native";
import { formatCurrency } from "../utils/formatCurrency";

const SERVICE_CARD_WIDTH = 263;

interface ProductCardLargeProps extends ViewProps {
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
  ...props
}) => {
  return (
    <View {...props} className="rounded-xl  bg-[#ffedd5] h-[230px]">
      <View className="justify-center items-center rounded-xl bg-[#ffedd5]">
        <View className="absolute top-0 right-0 z-10">
          <View className="bg-[#fdba74] rounded-bl-xl rounded-tr-xl w-[68px] h-[33px] items-center justify-center">
            <Text className="font-body text-sm text-[#1c1917] capitalize">
              {formatCurrency(price)}
            </Text>
          </View>
        </View>
        <Image width={150} height={150} source={{ uri: image }} />
      </View>
      <View className="p-4">
        <Text className="text-base font-body mt-2 text-[#1c1917] capitalize">
          {product}
        </Text>

        <Text className="font-body text-sm text-[#1c1917] capitalize">
          Disponível: {quantity}
        </Text>

        {/* <Text className="font-body text-sm text-[#1c1917] capitalize">
          {description}
        </Text> */}
      </View>
    </View>
  );
};
