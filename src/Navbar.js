import { useState } from 'react'; 
import logo from './logo1.jpg';
import Cart from './Components/Cart/Cart';
import './styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'; 
import { getTotalPrice } from './redux/cartSlice';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showCart, setShowCart] = useState(false); 
   
    const totalPrice = useSelector(getTotalPrice);
    
    const [menuOpen, setMenuOpen] = useState(false); 
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-img" />
                    <span className="brand-name">SUSHI HAUSE</span>
                </div>

                {/* Навигационные ссылки */}
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                        <Link to="/" onClick={toggleMenu}>STARTSEITE</Link>
                    </li>
                    <li>
                        <Link to="/bestellung" onClick={toggleMenu}>BESTELLUNG</Link>
                    </li>
                    <li>
                        <Link to="/restaurants" onClick={toggleMenu}>RESTAURANTS</Link>
                    </li>
                    
                </ul>

                {/* Корзина */}
                <div className="cart-container" onClick={toggleCart}>
                        <h4>€ {totalPrice.toFixed(2)}</h4>
                        <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />
                </div>

                <div className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            </nav>

            <Cart show={showCart} onClose={toggleCart} />
        </div>
    );
};

export default Navbar;
