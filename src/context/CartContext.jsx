import { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "../reducers/cartReducer";

export const CartContext = createContext({
    cart: [],
});

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);

    const addToCart = (product) => {
        dispatch({
            type: "ADD_TO_CART",
            payload: product,
        });
    };

    const removeFromCart = (product) => {
        dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
        });
    };

    const clearCart = () => {
        dispatch({
            type: "CLEAR_CART",
        });
    };

    const productIsInCart = (product) => {
        return state.some((item) => item.id === product.id);
    }

    return {
        state,
        addToCart,
        removeFromCart,
        clearCart,
        productIsInCart,
    };
}

export const CartContextProvider = ({ children }) => {
    const {
        state,
        addToCart,
        removeFromCart,
        clearCart,
        productIsInCart,
    } = useCartReducer();

    return (
        <CartContext value={{ cart: state, addToCart, removeFromCart, clearCart, productIsInCart }}>
            {children}
        </CartContext>
    );
}
