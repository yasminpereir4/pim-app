import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { ProductApi } from "../api/product";
import { Produto } from "../types/Products";

export function useGetAllProducts(
  options?: Omit<UseQueryOptions<Produto>, "queryKey" | "queryFn">,
) {
  return useQuery({
    queryKey: ["Products"],
    queryFn: async () => {
      const data = await ProductApi.buscarProdutos();

      return data;
    },
    ...options,
  });
}
