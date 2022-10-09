import React from 'react';
import AM1 from '../AM1/AM1';
import AM2 from '../AM2/AM2';
import './Manager.css'

const Manager = () => {
    return (
        <div className='manager'>
            <h4>Manager</h4>
            <section className='am'>
                <AM1></AM1>
                <AM2></AM2>
            </section>
        </div>
    );
};

export default Manager;