import { useTheme } from "../context/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="header">
            <h2>Mini Movie Manager
                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </h2>
        </header>
    );
}
export default Header