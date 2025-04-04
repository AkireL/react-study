import { useId } from "react"
import { useFilter } from "../uses/UseFilter";

function Filter() {
    const { filters, setFilters } = useFilter();
    const minPriceId = useId();
    const categoryId = useId();

    const onChangePrice = (event) => {
        setFilters({
            minPrice: event.target.value,
            category: filters.category,
        })
    }

    const onChangeCategory = (event) => {
        setFilters({
            category: event.target.value,
            minPrice: filters.minPrice,
        });
    }
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceId}>Apartir de: </label>
                <input
                    id={minPriceId}
                    type="range"
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                    onChange={onChangePrice}
                />
                <span>$ {filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryId}>Categoría</label>
                <select id={categoryId} value={filters.category} onChange={onChangeCategory}>
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