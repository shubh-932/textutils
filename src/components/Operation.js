import React, { useContext } from 'react'
import { TextContext } from '../contexts/TextContext';
import { ColorThemeContext } from '../contexts/ColorThemeContext';

export default function Operation({ showNotif }) {

    const [text, setText] = useContext(TextContext);
    const [colorTheme] = useContext(ColorThemeContext);

    function colorClass() {
        switch(colorTheme) {
            case 'red':
                return 'btn-red';
            case 'yellow':
                return 'btn-yellow';
            case 'green':
                return 'btn-green';
            default:
                return 'btn-primary'
        }
    }

    const upperCaseHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showNotif("Converted to Uppercase!");
    }
    const lowerCaseHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showNotif("Converted to Lowercase!");
    }

    const titleCaseHandler = () => {
        setText(text.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()));
        showNotif("Converted to Title case!");
    }

    const sentenceCaseHandler = () => {
        setText(text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, match => match.toUpperCase()));
        showNotif("Converted to Sentence case!");
    }

    const extraSpaceHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        showNotif("Removed Extra Spaces!");
    }

    const multiLineHandler = () => {
        setText(text.replace(/[\r\n]+/g, ' '));
        showNotif("Converted to Single Line!");
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(text);
        showNotif("Copied to Clipboard!");
    }

    const clearTextHandler = () => {
        setText('');
        showNotif("Text Cleared!");
    }

    return (
        <div className='container'>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={upperCaseHandler} disabled={text.length===0}>UPPERCASE</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={lowerCaseHandler} disabled={text.length===0}>lowercase</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={titleCaseHandler} disabled={text.length===0}>Title Case</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={sentenceCaseHandler} disabled={text.length===0}>Sentence case</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={extraSpaceHandler} disabled={text.length===0}>Remove Extra Spaces</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={multiLineHandler} disabled={text.length===0}>Convert to Single-Line</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={copyHandler} disabled={text.length===0}>Copy Text</button>
            <button className={`btn btn-sm mx-1 my-1 ${colorClass()}`} onClick={clearTextHandler} disabled={text.length===0}>Clear</button>
        </div>
    )
}
