import React, { useContext } from 'react'
import { TextContext } from '../contexts/TextContext';

export default function TextSummary() {

    const [text] = useContext(TextContext);

    return (
        <div className='container my-3'>
            <h5>Your Text Summary:</h5>
            <p>{ text.split(/\s+/).filter((word) => word !== '').length } words and { text.length } characters.</p>
            <p>{ 0.004*text.split(/\s+/).filter((word) => word !== '').length } minutes read.</p>
        </div>
    )
}
