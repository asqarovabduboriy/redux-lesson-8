import { create } from "zustand";

export const useCart = create((set) => ({
    cartItems: JSON.parse(localStorage.getItem("carts")) || [],
    addToCart: (payload) => set((state) => {
        let index = state.cartItems.findIndex(el => el.id === payload.id);
        
        let newCartItems;
        if (index < 0) {
            newCartItems = [...state.cartItems, { ...payload, quantity: 1 }];
        } else {
            newCartItems = state.cartItems.map((item, i) =>
                i === index ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
    
        localStorage.setItem("carts", JSON.stringify(newCartItems));
        return { cartItems: newCartItems };
    }),
}));

