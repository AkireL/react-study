import { use } from "react";
import { UserContext } from "../context/user";

export default function UserContextExample()
{
    const {name, isLogged, updateUser} = use(UserContext);

    return(
        <>
        {
            isLogged? 
            (
                <>
                    <p>Hola {name}</p>
                    <button onClick={() => updateUser({name: null, isLogged: false})}>
                        Cerrar sesion
                    </button>
                </>
            )
            : (
            <div>
                <p>Bienvenido</p>
                <button onClick={() => updateUser({name: "Juan", isLogged: true})}>
                    Iniciar sesión
                </button>
            </div>
            )
        }
        </>
    )
}