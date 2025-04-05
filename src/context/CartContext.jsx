import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
});

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    
    const addToCart = (product) => {
        cart.find((item) => item.id === product.id)
            ? setCart((prev) =>
                  prev.map((item) =>
                      item.id === product.id
                          ? { ...item, quantity: item?.quantity + 1 }
                          : item
                  )
              )
            :
        setCart((prev) => [...prev, {...product, quantity: 1}]);
    };

    const removeFromCart = (product) => {
        const productCurrent = cart.find((item) => item.id === product.id);
        
        if (productCurrent.quantity > 1) {
            setCart((prev) =>
                prev.map((item) =>
                    item.id === productCurrent.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            );
            return;
        }
        setCart((prev) => prev.filter((item) => item.id !== productCurrent.id));
    };
    const clearCart = () => {
        setCart([]);
    };

    const productIsInCart = (product) => {
        return cart.some((item) => item.id === product.id);
    }

    return (
        <CartContext value={{ cart, addToCart, removeFromCart, clearCart, productIsInCart }}>
            {children}
        </CartContext>
    );
}
