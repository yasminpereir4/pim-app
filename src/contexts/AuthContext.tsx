import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useCallback, useContext, useState } from "react";
import { AuthApi, LoginCredentials } from "../api/auth";
import { User } from "../types/User";

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isInitialLoad: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export const useAuthContext = () => useContext(AuthContext);

const storageTokenKey = "@pim/access-token";

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(false);

  // useEffect(() => {
  //   AsyncStorage.getItem(storageTokenKey)
  //     .then(async accessToken => {
  //       setAccessToken(accessToken);

  //       if (accessToken) {
  //         await fetchUser();
  //       }
  //     })
  //     .catch(error => {
  //       console.error(error);
  //       Alert.alert("Login", "Ocorreu um erro ao buscar o token.");
  //       AsyncStorage.removeItem(storageTokenKey).catch(console.error);
  //     })
  //     .finally(() => setIsInitialLoad(false));
  // }, []);

  // async function fetchUser() {
  //   try {
  //     const response = await api.post("/Auth/Login");
  //     setUser(response.data.data.user);
  //   } catch (error) {
  //     console.error(error);
  //     setUser(null);
  //   }
  // }

  const login = useCallback(async (credentials: LoginCredentials) => {
    const data = await AuthApi.login(credentials);
    setUser(data.dados);
  }, []);

  const logout = useCallback(async () => {
    await AsyncStorage.removeItem(storageTokenKey);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        login,
        logout,
        isInitialLoad,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
