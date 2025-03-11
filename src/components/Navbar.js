import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { NavLink } from 'react-router-dom';
import { ColorThemeContext } from '../contexts/ColorThemeContext';

export default function Navbar({ title, showNotif }) {

    const [darkMode, setDarkMode] = useContext(ThemeContext);
    const [, setColorTheme] = useContext(ColorThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        if (darkMode === false) {
            setColorTheme('dark');
            showNotif("Dark Mode Enabled!");
        }
        else {
            setColorTheme('');
            showNotif("Light Mode Enabled!");
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container-fluid">
                <span className="navbar-brand">{title}</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <div className="btn-group customThemeSelector" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-light" onClick={() => setColorTheme('')} disabled={darkMode} ></button>
                        <button type="button" className="btn btn-danger" onClick={() => setColorTheme('red')} disabled={darkMode} ></button>
                        <button type="button" className="btn btn-warning" onClick={() => setColorTheme('yellow')} disabled={darkMode} ></button>
                        <button type="button" className="btn btn-success" onClick={() => setColorTheme('green')} disabled={darkMode} ></button>
                    </div>
                    <div className={`form-check form-switch ${darkMode ? "text-light" : ""}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={toggleDarkMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{darkMode ? "Light Mode" : "Dark Mode"}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}