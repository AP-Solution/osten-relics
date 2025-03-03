import { createSlice } from '@reduxjs/toolkit';

const loadCartState = () => {
  try {
    const serializedCart = localStorage.getItem('ostenRelicsCart');
    if (serializedCart === null) {
      return {
        items: [],
        total: 0
      };
    }
    return JSON.parse(serializedCart);
  } catch (err) {
    console.error('Error loading cart from localStorage:', err);
    return {
      items: [],
      total: 0
    };
  }
};

const saveCartState = (state) => {
  try {
    const serializedCart = JSON.stringify(state);
    localStorage.setItem('ostenRelicsCart', serializedCart);
  } catch (err) {
    console.error('Error saving cart to localStorage:', err);
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartState(),
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, mainImage } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (!existingItem) {
        state.items.push({
          id,
          title,
          price,
          mainImage
        });
        state.total = calculateTotal(state.items);
        saveCartState(state);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      state.total = calculateTotal(state.items);
      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      saveCartState(state);
    }
  }
});

const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price, 0);
};

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
