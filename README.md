Conceptos

**preload:** Se usa cuando quieres que se precargue algo para que se tenga disponible cuando se requiera
Por ejemplo se puede cargar estilos y cuando un componente especifico lo requiera estos ya esten disponibles y los aplique al estilo del componente y no se note el cambio.

**preconnect:** funciona parecido preload pero con menos prioridad

**prefetchDNS:** Con esta función desde que inicia el componente busca el servidor que se le indica, para agilizar la conexión cuando se use.

**preinit:** Sirve para ejecutar cosas lo más antes posible.

Es decir el navegador comienza a descargarlo y ejecutarlo tan pronto como sea posible.
Si se usa preinit en una hoja de estilo, esta se inserta inmediatamente en el documento, haciendo que los estilos estén disponibles al instante para los elementos afectados.

Nota:
La funciones una vez que fuerón ejecudas ya no se vuelven a ejecutar por que ya están en cache.


**Usecallback**: Es una función que sirve para que creé solo una vez una función y si el componente se vuelve a renderizar no la cree otra vez.


**use**: es una API de react que te permite obtener/leer el valor de una promesa o un contexto. A comparación del useContext este si puede usar dentro de condicionales.


Para contexto se debe usar de esta manera
1. Crear  un archivo preferentemente dentro de la carpeta "context".

Dentro del archivo debe estar dos partes

Consumer

```jsx
import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext({
    name: null,
    isLogged: false,
    updateUser: () => {},
});
```

Provider

```jsx
import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext({
    name: null,
    isLogged: false,
    updateUser: () => {},
});

export default function UserContextProvider({ children }) {
    const [name, setName] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const updateUser = useCallback(({ name, isLogged }) => {
        setName(name);
        setIsLogged(isLogged);
    }, []);

    return (
        <UserContext value={{ name, isLogged, updateUser }}>
            {children}
        </UserContext>
    );
}
```

2. Agregar el provider en el top de los componentes

```jsx
  <UserContextProvider>
    <App />
  </UserContextProvider>
```

3. Ahora ya se puede usar en donde se requiera para leer los valores o realizar un cambio
