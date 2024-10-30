import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Fragment, useCallback } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";
import { GoBackButton } from "../../components/GoBackButton";
import { ProductCardLarge } from "../../components/ProductCardLarge";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";

interface AllProductsProps {}

export const AllProducts: React.FC<AllProductsProps> = () => {
  const { goBack } = useNavigation();
  const { data, refetch, isLoading, error } = useGetAllProducts();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View className="flex-1 bg-white">
      <GoBackButton onPress={() => goBack()} />

      {isLoading ? (
        <ActivityIndicator size={30} color={"#fb923c"} />
      ) : error || !data ? (
        <Text className="text-base font-black text-[#1c1917]">
          Houve um erro inesperado.
        </Text>
      ) : (
        <Fragment>
          <Text className="text-2xl p-4 mt-20 font-black  text-[#1c1917] ">
            Conheça todos os produtos
          </Text>
          <FlatList
            data={data?.dados}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 48,
            }}
            renderItem={({ item }) => (
              <ProductCardLarge
                image={item.imagem}
                price={item.preco}
                product={item.produto}
                quantity={item.quantidade}
                description={item.descricao}
              />
            )}
          />
        </Fragment>
      )}
    </View>
  );
};
