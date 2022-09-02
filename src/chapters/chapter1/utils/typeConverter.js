export const typeConverter = (type, value) => {
  if (type === "number") return parseInt(value);
  return value;
};
