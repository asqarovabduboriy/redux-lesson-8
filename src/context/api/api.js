import {create} from 'zustand';

const useProduct = create(set => ({
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://dummyjson.com/products?limit=12');
      const data = await response.json();
      set({ products: data, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  }
}));

export default useProduct;
