import { useState } from "react"
import { Products } from "./components/Products"
import { items } from "./mocks/products.json"
import { Header } from "./components/Filter";
import { Footer } from "./components/Footer";


function useFilters () {
  const [filter, setFilter] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((item) => {
      return (item.price >= filter.minPrice) && (item.category == filter.category || filter.category == 'all')
    })
  };

  return { filter, filterProducts, setFilter };
}

function App() {
  const [products] = useState(items)
  const { filter, filterProducts, setFilter } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <>
    <h1>Shopping card</h1>
    <Header setFilter={setFilter}></Header>
    <Products products={filteredProducts}></Products>
    <Footer filter={filter}></Footer>
    </>
  )
}

export default App
