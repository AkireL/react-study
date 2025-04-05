import React, { use } from "react";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { CartContext } from "../context/CartContext"

export function Products({products})
{
    const { addToCart, removeFromCart, productIsInCart} = use(CartContext);

    return (
        <main className="products">
            <ul>
            {
                products?.map(product => (
                    <li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                        ></img>
                        <div>
                            <strong>{product.title}</strong> - ${product.price}
                        </div>
                        <div style={{display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>                            
                            {
                                productIsInCart(product) ? 
                                <button 
                                    onClick={() => removeFromCart(product)}>
                                    <RemoveFromCartIcon></RemoveFromCartIcon>
                                </button>
                                : <button onClick={() => addToCart(product)}>
                                    <AddToCartIcon></AddToCartIcon>
                                </button>
                            }
                        </div>
                    </li>
                ))
            }
            </ul>
        </main>
    )
}