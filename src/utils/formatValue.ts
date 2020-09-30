const formatValue = (value: number): string => {
  const formatConfig = {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  };

  const formattedValue = new Intl.NumberFormat('pt-BR', formatConfig).format(
    value,
  );

  return formattedValue;
};

export default formatValue;
