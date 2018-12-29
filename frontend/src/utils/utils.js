export const formatNumber = number =>
  number ? number.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00";

export const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
