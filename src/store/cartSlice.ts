import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  stock: number;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ product: Product; size: string; color: string }>
    ) => {
      const { product, size, color } = action.payload;
      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingItem) {
        if (existingItem.quantity < product.stock) {
          existingItem.quantity += 1;
        }
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          selectedSize: size,
          selectedColor: color,
        });
      }
    },
    removeFromCart: (
      state,
      action: PayloadAction<{ id: number; size: string; color: string }>
    ) => {
      const { id, size, color } = action.payload;
      state.items = state.items.filter(
        (item) =>
          !(item.id === id && item.selectedSize === size && item.selectedColor === color)
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; size: string; color: string; quantity: number }>
    ) => {
      const { id, size, color, quantity } = action.payload;
      const item = state.items.find(
        (item) =>
          item.id === id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );
      if (item && quantity > 0 && quantity <= item.stock) {
        item.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
