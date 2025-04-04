import { useState } from "react"
import { useFilter } from "../uses/UseFilter";

function Filter() {
    const { setFilters } = useFilter();

    const [minPrice, setPriceMin] = useState(0);
    const [category, setCategory] = useState('all');

    const onChangePrice = (event) => {
        setPriceMin(event.target.value);
        setFilters({
            minPrice: event.target.value,
            category: category,
        })
    }

    const onChangeCategory = (event) => {
        setCategory(event.target.value);
        setFilters({
            category: event.target.value,
            minPrice: minPrice,
        });
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor="price">Apartir de: </label>
                <input
                    id="price"
                    type="range"
                    min='0'
                    max='1000'
                    value={minPrice}
                    onChange={onChangePrice}
                />
                <span>$ {minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">Categoría</label>
                <select id="category" value={category} onChange={onChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export function Header()
{
    return (
        <header>
            <h1>React Shop</h1>
            <Filter></Filter>
        </header>
    )
}