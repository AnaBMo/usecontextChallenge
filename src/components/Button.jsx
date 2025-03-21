/*
botón que hará que cambie el estado de light a dark
*/
import { useTheme } from '../themes/ThemeContext'; // importamos el hook 

const ThemeSelector = () => {

    const { theme, changeTheme } = useTheme(); // usamos nuestro propio hook en lugar de useState()

    const handleChangeTheme = () => {
        // Cambia entre light y dark según el tema actual
        const newTheme = theme === 'light' ? 'dark' : 'light';
        changeTheme(newTheme);
    };


    return(
        <>
            <div className="themeBtn">
                <button 
                    className="toggleThemeBtn"
                    onClick={handleChangeTheme}
                >
                    Cambiar a {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div>
        </>
    )

};

export default ThemeSelector;