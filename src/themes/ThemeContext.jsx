/*
Aquí estará nuestro contexto y donde haremos los cambios de estado.
Debemos comenzar con un estado de light que al pulsar cambiará a dark.
*/
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext()

// el contexto necesita un proveedor de contexto.
    // {children} -> significa que todo componente envuelto por el proveedor podrá aplicar el contexto
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    
    const changeTheme = (newTheme) => {
        setTheme(newTheme)
    };

    // efecto que se encarga de aplicar la clase al body cada vez que cambia el tema.
    useEffect(() => {
        document.body.className = theme; 
    }, [theme]);

    return (
        <>
        <ThemeContext.Provider value= {{theme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
        </>
    )
}

// exportamos el contexto por medio de la creación de nuestro propio hook.
export const useTheme = () => useContext(ThemeContext);