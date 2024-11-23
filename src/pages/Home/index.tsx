import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
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
import { Widget } from "../../components/Widget";
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
    { id: 1, source: require("~/assets/banner.png") },
    { id: 2, source: require("~/assets/banner2.png") },
    { id: 3, source: require("~/assets/farm3.jpeg") },
  ];

  return (
    <ScrollView className="flex-1 bg-[#FDFDFD]">
      <View className="px-6 py-10 mt-10">
        <Text className="text-[#fb923c] font-title text-2xl capitalize">
          Olá, {user?.nome}!
        </Text>
      </View>

      <View className="flex-1">
        <Carousel
          loop
          height={179}
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

      <View className="px-6 mt-10 flex-row items-center justify-between">
        <Text className="text-[#fb923c] font-title text-2xl capitalize">
          Nossos produtos
        </Text>
        <TouchableOpacity onPress={() => navigate("AllProducts")}>
          <Text className="text-base font-body underline text-[#1c1917]">
            Ver tudo
          </Text>
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
            />
          )}
        />
      )}

      <View className="px-6 mt-10">
        <Text className="text-[#fb923c] font-title text-2xl capitalize">
          Quem somos
        </Text>

        <View className="mt-4">
          <View className="mt-2 mb-2">
            <Widget
              icon={<FontAwesome name="envira" size={24} color="#fb923c" />}
              title="Objetivo"
            />
          </View>
          <View className="mt-2 mb-2">
            <Widget
              icon={
                <MaterialIcons
                  name="contact-support"
                  size={24}
                  color="#fb923c"
                />
              }
              title="Contato"
            />
          </View>
          <View className="mt-2 mb-2">
            <Widget
              icon={<Entypo name="unread" size={24} color="#fb923c" />}
              title="Termos de uso"
            />
          </View>
        </View>
      </View>
      <View className="mb-[123px]" />
    </ScrollView>
  );
};
