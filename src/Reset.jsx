import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart, increase, decrease } from "./counter";
import "./Reset.css";
import { Link } from "react-router-dom";

function Cart() {
    const items = useSelector((state) => state.counter.items);
    const dispatch = useDispatch();

    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    return (
        <section className="cart-section">
            <div className="container">
                <div className="header-shopping">
                    <Link to="./products"> <button><i class="fa-solid fa-arrow-left"></i></button></Link>
                    <h1>Shopping Cart</h1>
                </div>
                <div className="shopping-cart">
                    <div className="orders">
                        {items.map((item) => (
                            <div key={item.id} className="order-item">
                                <img src={item.image_link} alt={item.name} />
                                <div className="part-one">
                                    <h3>{item.name}</h3>
                                    <div className="quantity">
                                        <button onClick={() => dispatch(decrease(item.id))}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => dispatch(increase(item.id))}>+</button>
                                    </div>
                                </div>
                                <div className="part-two">

                                    <button onClick={() => dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></button>
                                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}


                        <hr />

                        {items.length > 0 && (
                            <button className="clear-cart" onClick={() => dispatch(clearCart())}>
                                Clear Cart
                            </button>
                        )}
                    </div>


                    <div className="checkout">
                        <h3>Order Summary</h3>
                        <div className="line">
                            <span>Subtotal ({items.length} items)</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="line">
                            <span>Shipping</span>
                            <span className="free">Free</span>
                        </div>
                        <div className="line">
                            <span>Tax</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className="line total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
