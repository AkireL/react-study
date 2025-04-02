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
