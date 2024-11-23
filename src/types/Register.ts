export interface RegisterData {
  dados: Dado[];
  mensagem: string;
  status: boolean;
}

export interface Dado {
  id: number;
  nome: string;
  email: string;
  senha: string;
  funcao: string;
}
