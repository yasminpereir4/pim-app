import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Text,
  View,
} from "react-native";
import { GoBackButton } from "../../components/GoBackButton";
import { ProductCardLarge } from "../../components/ProductCardLarge";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";

const gap = 16;
const screenSidePadding = 20;
const cardWidth =
  (Dimensions.get("window").width - (screenSidePadding * 2 + gap)) / 2;

interface AllProductsProps {}

export const AllProducts: React.FC<AllProductsProps> = () => {
  const { goBack, navigate } = useNavigation();
  const { data, refetch, isLoading, error } = useGetAllProducts();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center">
        <GoBackButton onPress={() => goBack()} />
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color={"#fb923c"} />
      ) : error || !data ? (
        <Text className="text-base font-black text-[#1c1917]">
          Houve um erro inesperado.
        </Text>
      ) : (
        <View className="mt-24">
          <FlatList
            data={data?.dados}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingTop: 10,
              paddingBottom: 16,
              paddingHorizontal: screenSidePadding,
            }}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            renderItem={({ item, index }) => (
              <ProductCardLarge
                price={item.preco}
                image={item.imagem}
                product={item.produto}
                onPress={() =>
                  navigate("ProductById", {
                    title: item.produto,
                    description: item.descricao,
                    price: item.preco,
                    quantity: item.quantidade,
                    image: item.imagem,
                  })
                }
                quantity={item.quantidade}
                description={item.descricao}
                style={{
                  width: cardWidth,
                  marginTop: index > 1 ? gap : 0,
                  marginBottom: index > 1 ? gap : 0,
                  marginLeft: (index + 1) % 2 === 0 ? gap : 0,
                  elevation: 2,
                }}
              />
            )}
          />
        </View>
      )}
    </View>
  );
};
