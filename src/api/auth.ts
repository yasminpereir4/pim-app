import { api } from "../lib/axios";
import { RegisterData } from "../types/Register";
import { User } from "../types/User";

interface LoginResponseData {
  dados: User;
}

export interface LoginCredentials {
  email: string;
  senha: string;
}

export interface RegisterCredentials {
  nome: string;
  email: string;
  senha: string;
  funcao: string;
}

export class AuthApi {
  static async login(credentials: LoginCredentials) {
    const response = await api.post<LoginResponseData>(
      "/Usuario/LogarUsuario",
      credentials,
    );
    return response.data;
  }

  static async register(data: RegisterCredentials) {
    console.log(data);
    const response = await api.post<RegisterData>(
      "/Usuario/CadastrarUsuario",
      data,
    );
    return response.data;
  }
}
