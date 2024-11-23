export interface Produto {
  dados: Dado[];
  mensagem: string;
  status: boolean;
}

export interface Dado {
  id: number;
  produto: string;
  descricao: string;
  preco: number;
  quantidade: number;
  imagem: string;
}
