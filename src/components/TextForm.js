import React, { useContext } from 'react'
import { TextContext } from '../contexts/TextContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { ColorThemeContext } from '../contexts/ColorThemeContext';
import { colorClass } from '../utils/colorUtils';

export default function TextForm({ heading }) {

    const [text, setText] = useContext(TextContext);
    const [darkMode] = useContext(ThemeContext);
    const [colorTheme] = useContext(ColorThemeContext);

    const style = {
        backgroundColor: '#272727',
        color: 'white'
    }

    return (
        <div className="container my-3 mb-3">
            <h3 className='mb-2'>{heading}</h3>
            <textarea className={`form-control ${colorClass(colorTheme)}`} style={darkMode ? style : {}} id="myBox" rows="8" placeholder="Enter the text..." value={text} onChange={(e) => { setText(e.target.value) }}></textarea>
        </div>
    )
}
