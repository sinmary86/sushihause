import { createSlice } from "@reduxjs/toolkit";
import dataDishes from "../data/dataDishes"; // Импорт данных блюд

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Массив товаров в корзине
    },
    reducers: {
        addItemToCart: (state, action) => {
            const { dish } = action.payload;
            const existingItem = state.items.find((item) => item.dishId === dish.id);
        
            if (existingItem) {
                existingItem.quantity += 1; // Увеличиваем количество
            } else {
                state.items.push({
                    dishId: dish.id,
                    quantity: 1, // Добавляем новый товар с количеством 1
                });
            }
        },
        updateItemQuantity: (state, action) => {
            const { dishId, quantity } = action.payload;
            const item = state.items.find((item) => item.dishId === dishId);
        
            if (item && quantity > 0) {
                item.quantity = quantity; // Обновляем количество
            } else if (item && quantity <= 0) {
                state.items = state.items.filter((item) => item.dishId !== dishId); // Удаляем товар
            }
        },
        
        // Удаление товара из корзины
        removeItemFromCart: (state, action) => {
            const { cartItemId } = action.payload;
            state.items = state.items.filter((item) => item.dishId !== cartItemId);
        },
    },
});

// Селектор для получения товаров из корзины
export const getCartItems = (state) => state.cart.items;

// Селектор для расчёта общей суммы
export const getTotalPrice = (state) => {
    return state.cart.items.reduce((total, cartItem) => {
        const dish = dataDishes.find((item) => item.id === cartItem.dishId);
        
        // Если блюдо не найдено, пропускаем его
        if (!dish) {
            console.warn(`Dish with ID ${cartItem.dishId} not found`);
            return total;
        }

        // Преобразуем цену в число
        const price = parseFloat(String(dish.price).replace(",", ".")) || 0;

        // Увеличиваем общую сумму
        return total + price * cartItem.quantity;
    }, 0);
};

// Экспорт действий для использования в компонентах
export const { addItemToCart, updateItemQuantity, removeItemFromCart } = cartSlice.actions;

// Экспорт редьюсера для добавления в store
export default cartSlice.reducer;
