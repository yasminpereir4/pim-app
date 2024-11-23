import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  RegisterFormInput,
  registerValidationSchema,
} from "../../../validation/register";
import { AuthApi } from "../../api/auth";
import { ErrorMessage } from "../../components/ErrorMessage";
import { GoBackButton } from "../../components/GoBackButton";
import { InputPassword } from "../../components/InputPassword";
import { InputText } from "../../components/InputText";
import { useAuthContext } from "../../contexts/AuthContext";

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
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <GoBackButton onPress={() => goBack()} />
      <View className="p-4 justify-center flex-1">
        <View className="justify-center ">
          <View className="items-center">
            <Text className="text-5xl  font-black text-[#1c1917] mt-6">
              FarmTech
            </Text>
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
                    style={{
                      backgroundColor: "white",
                    }}
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
                      style={{
                        backgroundColor: "white",
                      }}
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
                      style={{
                        backgroundColor: "white",
                      }}
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
                      style={{
                        backgroundColor: "white",
                      }}
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
                      style={{
                        backgroundColor: "white",
                      }}
                    />
                    <ErrorMessage message={error?.message} />
                  </View>
                )}
              />
            </View>
          </View>

          <View className="mt-5">
            <TouchableOpacity
              disabled={isSubmitting}
              onPress={handleRegister}
              style={{ elevation: 3 }}
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
        </View>
      </View>
    </ScrollView>
  );
};
