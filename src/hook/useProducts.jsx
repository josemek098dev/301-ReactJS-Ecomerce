import { useEffect, useState } from "react";

export const useProducts = (urlDef = 'https://fakestoreapi.com/products') => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = urlDef;

      try {
        const response = await fetch(url);
        const data = await response.json();

        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [urlDef]); // Agrega urlDef a la lista de dependencias del useEffect

  return products;
};
