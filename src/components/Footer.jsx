export function Footer({filter}){
    return (
        <footer className="footer">
            {
                JSON.stringify(filter, null, 2)
            }
        </footer>
    )
}