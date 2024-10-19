import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ErrorMessage } from "../../components/ErrorMessage";
import { GoBackButton } from "../../components/GoBackButton";
import { InputPassword } from "../../components/InputPassword";
import { InputText } from "../../components/InputText";
import { LoginFormInput, loginValidationSchema } from "../../validation/login";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { goBack, navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginValidationSchema),
  });

  return (
    <View className="flex-1">
      <ImageBackground
        blurRadius={5}
        resizeMode="cover"
        className="w-full h-full blur-[10px]"
        source={require("../../assets/farm.png")}
      >
        <GoBackButton onPress={() => goBack()} />
        <View className="p-4 justify-center flex-1">
          <View
            className="rounded-2xl justify-center p-4"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <View className="items-center">
              <Image alt="" source={require("../../assets/logo.png")} />
            </View>

            <View className="mt-4 space-y-2">
              <Text className="ml-2 text-[#505050] font-normal mb-2">
                E-mail
              </Text>
              <Controller
                control={control}
                name="identifier"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <View>
                    <InputText
                      value={value}
                      variant="secondary"
                      autoCapitalize="none"
                      onChangeText={onChange}
                      placeholder="seu@email.com"
                    />
                    <ErrorMessage message={error?.message} />
                  </View>
                )}
              />
            </View>
            <View className="mt-5 space-y-2">
              <Text className="ml-2 text-[#505050] font-normal mb-2">
                Senha
              </Text>
              <Controller
                control={control}
                name="password"
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <View>
                    <InputPassword
                      variant="secondary"
                      placeholder="*******"
                      value={value}
                      onChangeText={onChange}
                    />
                    <ErrorMessage message={error?.message} />
                  </View>
                )}
              />
            </View>

            <View className="flex-row mt-4">
              <Text className="text-[#505050] font-normal">
                Não tem conta?{" "}
              </Text>
              <Text
                className="text-[#FB923C] underline font-medium"
                onPress={() => navigate("Register")}
              >
                {" "}
                Cadastre-se
              </Text>
            </View>

            <View className="mt-5">
              <TouchableOpacity
                onPress={() => {}}
                className="rounded-2xl bg-[#FB923C] px-4 py-4 mt-4"
              >
                <Text className="text-lg font-medium text-[#FFFFFF] text-center">
                  Entrar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
