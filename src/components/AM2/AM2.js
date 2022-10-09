import React from 'react';
import Export from '../Export/Export';
import Import from '../Import/Import';
import './AM2.css'

const AM2 = () => {
    return (
        <div className='am2'>
            <h5>Assistant Manager 2</h5>
            <section className='under2'>
                <Import></Import>
                <Export></Export>
            </section>
        </div>
    );
};

export default AM2;