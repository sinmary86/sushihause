import { useDispatch } from "react-redux";
import dataDishes from "../../data/dataDishes";
import { updateItemQuantity, removeItemFromCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";

const CartItem = ({ cartItem }) => {
    const dispatch = useDispatch();

    const dish = dataDishes.find((item) => item.id === cartItem.dishId);

    if (!dish) {
        console.warn(`Dish with ID ${cartItem.dishId} not found`);
        return null;
    }

    const handleIncrease = () => {
        dispatch(updateItemQuantity({ dishId: cartItem.dishId, quantity: cartItem.quantity + 1 }));
    };

    const handleDecrease = () => {
        if (cartItem.quantity > 1) {
            dispatch(updateItemQuantity({ dishId: cartItem.dishId, quantity: cartItem.quantity - 1 }));
        } else {
            dispatch(removeItemFromCart({ cartItemId: cartItem.dishId }));
        }
    };

    return (
        <tr>
            <td>{dish.name}</td>
            <td>€ {parseFloat(dish.price).toFixed(2)}</td>
            <td>
                <ChangeQuantity
                    quantity={cartItem.quantity}
                    onIncrease={handleIncrease}
                    onDecrease={handleDecrease}
                    className="modal-quantity"
                />
            </td>
            <td>€ {(parseFloat(dish.price) * cartItem.quantity).toFixed(2)}</td>
        </tr>
    );
};

export default CartItem;
