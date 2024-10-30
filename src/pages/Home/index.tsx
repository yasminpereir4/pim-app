import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { ProductCard } from "../../components/ProductCard";
import { useAuthContext } from "../../contexts/AuthContext";
import { useGetAllProducts } from "../../hooks/useGetAllProducts";

interface HomeProps {}
const MARGIN_SERVICE_CARD = 24;

export const Home: React.FC<HomeProps> = () => {
  const { user } = useAuthContext();
  const { navigate } = useNavigation();
  const dimensions = useWindowDimensions();
  const { data, refetch, isLoading, error } = useGetAllProducts();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const images = [
    { id: 1, source: require("~/assets/farm1.jpg") },
    { id: 2, source: require("~/assets/farm2.jpg") },
    { id: 3, source: require("~/assets/farm3.jpeg") },
  ];

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="px-6 py-10 mt-10">
        <Text className="text-[#1c1917] font-light text-2xl capitalize">
          Olá, {user?.nome}!
        </Text>
        <Text className="text-2xl font-black text-[#1c1917] mt-8">
          Nossa fazenda
        </Text>
      </View>

      <View className="flex-1">
        <Carousel
          loop
          height={240}
          autoPlay
          width={dimensions.width}
          data={images}
          panGestureHandlerProps={{
            activeOffsetX: [-10, 10],
          }}
          scrollAnimationDuration={1500}
          renderItem={({ item }) => (
            <View style={{ paddingHorizontal: MARGIN_SERVICE_CARD }}>
              <Image
                alt="Imagem da fazenda"
                height={179}
                style={{
                  borderRadius: 10,
                  width: dimensions.width - MARGIN_SERVICE_CARD * 2,
                  height: 179,
                }}
                source={item.source}
              />
            </View>
          )}
        />
      </View>

      <View className="px-6 flex-row items-center justify-between">
        <Text className="text-2xl font-black text-[#1c1917]">
          Nossos produtos
        </Text>
        <TouchableOpacity
          onPress={() => navigate("AllProducts")}
          className="px-4 py-2 border-[1px] border-[#1c1917] rounded-full"
        >
          <Text className="text-base font-black text-[#1c1917]">Ver tudo</Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size={30} color={"#fb923c"} />
      ) : error || !data ? (
        <Text className="text-base font-black text-[#1c1917]">
          Houve um erro inesperado.
        </Text>
      ) : (
        <FlatList
          horizontal
          data={data?.dados}
          keyExtractor={item => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          contentContainerStyle={{
            paddingHorizontal: MARGIN_SERVICE_CARD,
            paddingTop: 20,
          }}
          ItemSeparatorComponent={() => (
            <View style={{ width: MARGIN_SERVICE_CARD }} />
          )}
          renderItem={({ item }) => (
            <ProductCard
              image={item.imagem}
              price={item.preco}
              product={item.produto}
              quantity={item.quantidade}
              description={item.descricao}
            />
          )}
        />
      )}
      <View className=" mb-[123px]" />
    </ScrollView>
  );
};
