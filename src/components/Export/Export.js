import React, { useContext } from 'react';
import { MyContext } from '../About/About';
import './Export.css'

const Export = () => {
    /* call useContext function with context name to use it */
    const notice = useContext(MyContext)
    return (
        <div className='export'>
            <h6>Export</h6>
            <p><small>{notice}</small></p>
        </div>
    );
};

export default Export;