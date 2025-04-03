import { useState } from "react"

function Filter({setFilter}) {

    const [priceMin, setPriceMin] = useState(0);
    const [category, setCategory] = useState('all');

    const onChangePrice = (event) => {
        setPriceMin(event.target.value);
        setFilter({
            minPrice: event.target.value,
            category: category,
        })
    }

    const onChangeCategory = (event) => {
        setCategory(event.target.value);
        setFilter({
            category: event.target.value,
            minPrice: priceMin,
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
                    value={priceMin}
                    onChange={onChangePrice}
                />
                <span>$ {priceMin}</span>
            </div>
            <div>
                <label htmlFor="categoria">Categoría</label>
                <select id="category" value={category} onChange={onChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Laptops</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

export function Header({setFilter})
{
    return (
        <header>
            <h1>React Shop</h1>
            <Filter setFilter={setFilter}></Filter>
        </header>
    )
}