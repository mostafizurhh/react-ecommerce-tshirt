import React from 'react';
import HR from '../HR/HR';
import Production from '../Production/Production';
import './AM1.css'

const AM1 = () => {
    return (
        <div className='am1'>
            <h5>Assistant Manager 1</h5>
            <section className='under'>
                <HR></HR>
                <Production></Production>
            </section>
        </div>
    );
};

export default AM1;