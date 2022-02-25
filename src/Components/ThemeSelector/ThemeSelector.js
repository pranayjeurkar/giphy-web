import { memo, useContext } from "react";
import { ThemeSelectorWrapper } from './styled';
import { ThemeContext } from '../../App';
import { getTheme } from "../../utils";

const ThemeSelector = () => {
    const ThemeContextVal = useContext(ThemeContext);
    const toggleTheme = () => {
        const theme = getTheme(ThemeContextVal.theme);
        ThemeContextVal.setTheme(theme);
        document.body.style.backgroundColor = theme === "light" ? "lightyellow" : "black";
    };
    return (
        <ThemeSelectorWrapper onClick={toggleTheme}>ToggleTheme</ThemeSelectorWrapper>
    )
}

export default memo(ThemeSelector);