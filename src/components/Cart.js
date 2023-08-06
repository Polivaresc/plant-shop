import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCreditCard, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Cart = (props) => {
    const { setShowCart, cartItems, removeItem, showModal } = props
    const [totalPrice, setTotalPrice] = useState(0) 

    useEffect(() => {
        let prices = 0
        cartItems.map((cartItem) => {
            return prices += parseFloat(cartItem.totalPrice)
        })
        setTotalPrice(prices)
    }, [cartItems])

    return (
        <div className="shopping-cart">
            <div className="cart-head">
                <span>Your Cart</span>
                <span className="close-cart" onClick={() => setShowCart(false)}><FontAwesomeIcon icon={faXmark}/></span>
            </div>
            <ul className="cart-items-list">
                    {cartItems.length ? cartItems.map((cartItem) => 
                            <li key={cartItem.id} className="cart-item">
                                <span>{cartItem.plantName}</span>
                                <span>x{cartItem.quantity}</span>
                                <span className="cart-item-price">{cartItem.totalPrice} €</span>
                                <FontAwesomeIcon icon={faTrashCan} className="delete-icon" onClick={() => removeItem(cartItem)}/>
                            </li>
                        ) 
                        : <div className="empty-cart">Your cart is empty!</div>
                    }
            </ul>
            <div className="cart-footer"><span>Total:</span><span className="cart-item-price">{totalPrice} €</span></div>
            <button className="pay-button" onClick={showModal}><span>Pay</span><FontAwesomeIcon icon={faCreditCard}/></button>
        </div>
    )
}

export default Cart;