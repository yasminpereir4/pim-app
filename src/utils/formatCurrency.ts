const formatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatCurrency(currency: number): string {
  return formatter.format(currency);
}
