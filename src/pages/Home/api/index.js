import fetchData from "../../../api/fetch";

export const getProducts = async () => {
  return await fetchData("/products");
};
