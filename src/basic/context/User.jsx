import React, { createContext, useCallback, useState } from 'react';

export const UserContext = createContext({name: null,  isLogged: false});

export default function UserContextProvider ({ children }) {
    const [name, setName] = useState(null);
    const [isLogged, setIsLogged] = useState(false);

    const updateUser = useCallback(({name, isLogged}) => {
        setName(name);
        setIsLogged(isLogged);
    }, []);

    return (
        <UserContext value={{ name, isLogged, updateUser }}>
            {children}
        </UserContext>
    );
};