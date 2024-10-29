import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { AxiosError } from "axios";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ErrorMessage } from "../../components/ErrorMessage";
import { GoBackButton } from "../../components/GoBackButton";
import { InputPassword } from "../../components/InputPassword";
import { InputText } from "../../components/InputText";
import { useAuthContext } from "../../contexts/AuthContext";
import { LoginFormInput, loginValidationSchema } from "../../validation/login";

interface LoginProps {}

export const Login: React.FC<LoginProps> = () => {
  const { goBack, navigate } = useNavigation();
  const { login } = useAuthContext();
  const {
    control,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormInput>({
    resolver: zodResolver(loginValidationSchema),
  });

  const handleLogin = handleSubmit(async values => {
    try {
      await login({
        email: values.email,
        senha: values.password,
      });
    } catch (error) {
      console.log(error);
      if (error instanceof AxiosError && error.response?.status === 400) {
        return setError("password", {
          message: "Esta senha não corresponde a senha cadastrada.",
        });
      }
      Alert.alert(
        "Erro",
        "Ocorreu um erro inesperado. Tente novamente em alguns segundos.",
      );
    }
  });

  return (
    <View className="flex-1">
      <GoBackButton onPress={() => goBack()} />
      <View className="p-4 mt-20 justify-center flex-1">
        <View className="items-center">
          <Text className="text-5xl font-black text-[#1c1917] mt-6">
            FarmTech
          </Text>
        </View>

        <View className="mt-8 space-y-2">
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <View>
                <InputText
                  value={value}
                  variant="secondary"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  placeholder="seu@email.com"
                  style={{
                    backgroundColor: "white",
                  }}
                />
                <ErrorMessage message={error?.message} />
              </View>
            )}
          />
        </View>
        <View className="mt-5 space-y-2">
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <View>
                <InputPassword
                  variant="secondary"
                  placeholder="*******"
                  value={value}
                  onChangeText={onChange}
                  style={{
                    backgroundColor: "white",
                  }}
                />
                <ErrorMessage message={error?.message} />
              </View>
            )}
          />
        </View>

        <View className="mt-5">
          <TouchableOpacity
            onPress={handleLogin}
            disabled={isSubmitting}
            style={{ elevation: 3 }}
            className="rounded-2xl bg-[#f97316] px-4 py-4 mt-4"
          >
            {isSubmitting ? (
              <ActivityIndicator size={20} color={"#FFFFFF"} />
            ) : (
              <Text className="text-lg font-medium text-[#FFFFFF] text-center">
                Entrar
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View className="items-center">
        <Image
          className="w-full h-[150px]"
          source={require("../../assets/wave.png")}
        />
        <View className="flex-row absolute bottom-8 ">
          <Text className="text-white font-medium text-lg">
            Não tem conta?{" "}
          </Text>
          <Text
            className="text-white font-medium text-lg"
            onPress={() => navigate("Register")}
          >
            Cadastre-se
          </Text>
        </View>
      </View>
    </View>
  );
};
