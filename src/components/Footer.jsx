import { use } from "react";
import { CartContext } from "../context/CartContext";
import { useFilter } from "../uses/UseFilter"

export function Footer(){
    const { filters } = useFilter();
    const { cart } = use(CartContext)

    return (
        <footer className="footer">
            {
                JSON.stringify(filters, null, 2)
            }
            {
                JSON.stringify(cart, null, 2)
            }

        </footer>
    )
}