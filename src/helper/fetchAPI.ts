export const getProduct = async () => {
  const res = await fetch("https://localhost:4000/product");
  return res.json();
};
