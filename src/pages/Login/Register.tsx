import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AuthApi } from "../../api/auth";
import { ErrorMessage } from "../../components/ErrorMessage";
import { GoBackButton } from "../../components/GoBackButton";
import { InputPassword } from "../../components/InputPassword";
import { InputText } from "../../components/InputText";
import { useAuthContext } from "../../contexts/AuthContext";
import {
  RegisterFormInput,
  registerValidationSchema,
} from "../../validation/register";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const { login } = useAuthContext();
  const { goBack, navigate } = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(registerValidationSchema),
  });

  const handleRegister = handleSubmit(async values => {
    try {
      await AuthApi.register({
        nome: values.fullName,
        email: values.email,
        senha: values.password,
        funcao: values.role,
      });
      await login({
        email: values.email,
        senha: values.password,
      });
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Erro",
        "Ocorreu um erro inesperado. Tente novamente em alguns segundos.",
      );
    }
  });

  return (
    <View className="flex-1 ">
      <ImageBackground
        blurRadius={5}
        resizeMode="cover"
        className="w-full h-full blur-[10px]"
        source={require("../../assets/farm.png")}
      >
        <GoBackButton onPress={() => goBack()} />
        <View className="p-4 justify-center flex-1">
          <View className="justify-center ">
            <ScrollView
              contentContainerStyle={{
                padding: 16,
                borderRadius: 16,
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <View className="items-center">
                <Image alt="" source={require("../../assets/logo.png")} />
              </View>
              <View className="mt-5">
                <Controller
                  control={control}
                  name="fullName"
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <View>
                      <InputText
                        placeholder="Nome completo"
                        value={value}
                        onChangeText={onChange}
                      />
                      <ErrorMessage message={error?.message} />
                    </View>
                  )}
                />
                <View className="relative mt-5 space-y-2">
                  <Controller
                    control={control}
                    name="email"
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <View>
                        <InputText
                          placeholder="Endereço de email"
                          value={value}
                          onChangeText={onChange}
                        />
                        <ErrorMessage message={error?.message} />
                      </View>
                    )}
                  />
                </View>
                <View className="relative mt-5 space-y-2">
                  <Controller
                    control={control}
                    name="role"
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <View>
                        <InputText
                          placeholder="Função"
                          value={value}
                          onChangeText={onChange}
                        />
                        <ErrorMessage message={error?.message} />
                      </View>
                    )}
                  />
                </View>

                <View className="relative mt-5 space-y-2">
                  <Controller
                    name="password"
                    control={control}
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <View>
                        <InputPassword
                          placeholder="*******"
                          value={value}
                          onChangeText={onChange}
                        />
                        <ErrorMessage message={error?.message} />
                      </View>
                    )}
                  />
                </View>

                <View className="relative mt-5 space-y-2">
                  <Controller
                    name="passwordConfirmation"
                    control={control}
                    render={({
                      field: { value, onChange },
                      fieldState: { error },
                    }) => (
                      <View>
                        <InputPassword
                          placeholder="*******"
                          value={value}
                          onChangeText={onChange}
                        />
                        <ErrorMessage message={error?.message} />
                      </View>
                    )}
                  />
                </View>
              </View>

              <View className="flex-row mt-4">
                <Text className="text-[#505050] font-normal">
                  Já possui conta?{" "}
                </Text>
                <Text
                  onPress={() => navigate("Login")}
                  className="text-[#f97316] underline font-medium"
                >
                  {" "}
                  Login
                </Text>
              </View>

              <View className="mt-5">
                <TouchableOpacity
                  disabled={isSubmitting}
                  onPress={handleRegister}
                  className="rounded-2xl bg-[#f97316] px-4 py-4 mt-4"
                >
                  {isSubmitting ? (
                    <ActivityIndicator color={"#FFFFFF"} size={24} />
                  ) : (
                    <Text className="text-lg font-medium text-[#FFFFFF] text-center">
                      Cadastrar
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
