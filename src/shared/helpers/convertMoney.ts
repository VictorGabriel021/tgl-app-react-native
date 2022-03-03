export const convertPriceForReal = (price: number) => {
  const newNum =
    "R$ " +
    price
      .toFixed(2)
      .replace(".", ",")
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return newNum;
};
