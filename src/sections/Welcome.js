import React from 'react'

import './Welcome.css'
import Logo from '../assets/images/logo.svg'
import About from './About'

const Welcome = () => {
    return (
            <main>
                <section className='welcome'>
                    <div>
                        <img src={Logo} alt='logo' className='welcome--logo' />
                        <p>Currently under construction</p>
                    </div>
                </section>
                <About />
            </main>
    )
}

export default Welcome