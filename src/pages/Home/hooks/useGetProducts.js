import useFetch from "../../../hooks/useFetch";
import { getProducts } from "../api";

const useGetProducts = () => {
  const { data, loading, error } = useFetch(getProducts);

  return { products: data, isFetching: loading, error };
};

export default useGetProducts;
