import { api } from "../lib/axios";
import { User } from "../types/User";

interface LoginResponseData {
  dados: User;
}

export interface LoginCredentials {
  email: string;
  senha: string;
}

export class AuthApi {
  static async login(credentials: LoginCredentials) {
    const response = await api.post<LoginResponseData>(
      "/Usuario/LogarUsuario",
      credentials,
    );
    return response.data;
  }
}
