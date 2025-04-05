import { use, useId } from "react"
import { ClearCartIcon, CartIcon, AddToCartIcon } from "./Icons"
import { CartContext } from "../context/CartContext";


function CartItem({item, addToCart, removeFromCart}){
    return(
        <li key={item.id}>
            <img src={item.thumbnail} alt={item.title}></img>
            <div>
                <strong>{item.title}</strong> - ${item.price}
            </div>
            <footer>
                <div>
                    <small>{item.quantity}</small>
                    <button onClick={() => addToCart(item)}>
                        <AddToCartIcon/>
                    </button>
                    {
                        item.quantity > 1 ?
                        <button onClick={() => removeFromCart(item)}>-</button>
                        : null
                    }
                </div>
            </footer>
        </li>
    )
}

export function Cart(){
    const cartCheckboxId = useId();
    const { cart, addToCart, clearCart, removeFromCart } = use(CartContext);
    
    
    return (
        <div>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon></CartIcon>
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden />
            <aside className="cart">
                <ul>
                    {
                        cart.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        ></CartItem>
                    ))
                    }
                </ul>
                {
                    cart.length > 0 ?
                    <button onClick={() => clearCart()}>
                        <ClearCartIcon />
                    Clear cart
                </button>
                : <p>Selecciona un producto del catálogo</p>
                }
            </aside>
        </div>
    )
}