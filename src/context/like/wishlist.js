import { create } from "zustand";

const useWishlist = create((set) => ({
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    toggleWishlist: (id) =>
        set((state) => {
            const isInWishlist = state.wishlist.findIndex( (item) => item === id);
            const newWishlist = isInWishlist === 0
                ? state.wishlist.filter((item) => item !== id)
                : [...state.wishlist, id];

            localStorage.setItem("wishlist", JSON.stringify(newWishlist));

            return { wishlist: newWishlist };
        }),
}));

export default useWishlist;
