function Input({ref}){
    return (
        <input ref={ref} placeholder="typing somethins"></input>
    )

}
export function Form(){
    return(
        <>
        <form>
            <Input></Input>
        </form>
        </>
    )
}