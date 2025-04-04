import React, { createContext, useState } from "react";

export const FilterContext = createContext({ category: "all", minPrice: 0});

export function FilterContextProvider ({children}) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 250
      });

    return(
        <FilterContext value={{ filters, setFilters }}>
            {children}
        </FilterContext>
    )
}