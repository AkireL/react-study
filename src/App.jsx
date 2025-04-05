import { useState } from "react"
import { Products } from "./components/Products"
import { items } from "./mocks/products.json"
import { Header } from "./components/Filter";
import { Footer } from "./components/Footer";
import { useFilter } from "./uses/UseFilter";
import { Cart } from "./components/Cart";
import { CartContextProvider } from './context/CartContext.jsx'


function App() {
  const [products] = useState(items)
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(products);

  return (
    <CartContextProvider>
      <h1>Shopping card</h1>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </CartContextProvider>
  )
}

export default App
