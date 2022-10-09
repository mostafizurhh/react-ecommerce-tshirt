import React, { createContext } from 'react';
import './About.css'
import CEO from '../CEO/CEO';
import MD from '../MD/MD';
import Manager from '../Manager/Manager';

//1. create and export context to use it somewhere else
export const MyContext = createContext('Notice')

const About = () => {
    return (
        /* 2. set context provider with value */
        <MyContext.Provider value='Company Rules'>
            <div className='company'>
                <h1>Company Structure</h1>
                <section>
                    <CEO></CEO>
                    <MD></MD>
                    <Manager></Manager>
                </section>
            </div>
        </MyContext.Provider>

    );
};

export default About;