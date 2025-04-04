import { use } from "react";
import { FilterContext } from "../context/filterContext";

export function useFilter() {
      const { filters, setFilters } = use(FilterContext);

      const filterProducts = (products) => {
        return products.filter((item) => {
          return (item.price >= filters?.minPrice) && (item.category === filters?.category || filters?.category == 'all')
        });
      };

    return {filters, setFilters, filterProducts }
}