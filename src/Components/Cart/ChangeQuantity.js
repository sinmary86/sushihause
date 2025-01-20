const ChangeQuantity = ({ quantity, onIncrease, onDecrease, className = "" }) => {
    return (
        <div className={`dish-portion-controls ${className}`}>
            <button onClick={onDecrease} className="quantity-btn">
                -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button onClick={onIncrease} className="quantity-btn">
                +
            </button>
        </div>
    );
};

export default ChangeQuantity;
