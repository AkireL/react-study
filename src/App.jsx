import { useState } from "react"
import { Products } from "./components/Products"
import { items } from "./mocks/products.json"
import { Header } from "./components/Filter";
import { Footer } from "./components/Footer";
import { useFilter } from "./uses/UseFilter";


function App() {
  const [products] = useState(items)
  const { filterProducts } = useFilter()

  const filteredProducts = filterProducts(products);

  return (
    <>
      <h1>Shopping card</h1>
      <Header></Header>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </>
  )
}

export default App
