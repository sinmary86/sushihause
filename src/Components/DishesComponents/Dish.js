import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, updateItemQuantity } from "../../redux/cartSlice";
import "../../styles/DishCard.css"; // Стили карточки
import ChangeQuantity from "../Cart/ChangeQuantity";

const Dish = ({ dish }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const cartItem = cartItems.find((item) => item.dishId === dish.id);
    const quantity = cartItem ? cartItem.quantity : 0;

    const handleIncrease = () => {
        dispatch(addItemToCart({ dish })); // Увеличиваем количество
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            dispatch(updateItemQuantity({ dishId: dish.id, quantity: quantity - 1 })); // Уменьшаем количество
        } else {
            dispatch(updateItemQuantity({ dishId: dish.id, quantity: 0 })); // Удаляем товар, если количество <= 0
        }
    };

    return (
        <div className="dish-card">
            <img src={`/${dish.img}.jpg`} alt={dish.name} />
            <h2>{dish.name}</h2>
            <p>{dish.description}</p>
            <div className="dish-footer">
                <h4 className="dish-price">€ {parseFloat(dish.price).toFixed(2)}</h4>
                <ChangeQuantity
                    quantity={quantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                />
            </div>
        </div>
    );
};

export default Dish;
