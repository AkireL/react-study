import { useFilter } from "../uses/UseFilter"

export function Footer(){
    const { filter } = useFilter();

    return (
        <footer className="footer">
            {
                JSON.stringify(filter, null, 2)
            }
        </footer>
    )
}