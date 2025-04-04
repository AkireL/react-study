import React from "react";
import { AddToCartIcon } from "./Icons";
import './../product.css'

export function Products({products})
{
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
                        <div>
                            <button><AddToCartIcon></AddToCartIcon></button>
                        </div>
                    </li>
                ))
            }
            </ul>
        </main>
    )
}