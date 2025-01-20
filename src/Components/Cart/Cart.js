import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import "../../styles/CartModal.css";

const Cart = ({ show, onClose }) => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    if (!show) return null; 

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Warenkorb</h2>
                <table>
               
                    <thead>
                        <tr>
                            <th>Produkt</th>
                            <th>Preis</th>
                            <th>Anzahl</th>
                            <th>Zwischensumme</th>
                        </tr>
                    </thead>
                
                    <tbody>
                        {cartItems.length === 0 ? (
                            <tr>
                                <td colSpan="4">Ihr Warenkorb ist leer!</td>
                            </tr>
                        ) : (
                            cartItems.map((cartItem) => (
                                <CartItem key={cartItem.dishId} cartItem={cartItem} />
                            ))
                        )}
                    </tbody>
                </table>
            
                <h3>Gesamtsumme: € {totalPrice.toFixed(2)}</h3>
                <div className="modal-buttons">
                    <button onClick={onClose}>Weiter Einkaufen</button>
                    {cartItems.length > 0 && <button onClick={onClose}>Zur Kasse</button>}
                </div>
            </div>
        </div>
    );
};


export default Cart;