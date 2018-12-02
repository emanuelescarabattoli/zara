export const formatNumber = number =>
  number ? number.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00";
