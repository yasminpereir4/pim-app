import { api } from "../lib/axios";
import { Produto } from "../types/Products";

export class ProductApi {
  static async buscarProdutos() {
    const response = await api.get<Produto>("/Produto/BuscarProdutos");
    return response.data;
  }
}
