import './Header.css'
import React from 'react'

const Header = () => {
    return (
        <div className='header_total'>
            <div className='header_div'>
                <h2 className='logo text_color'> L<span className='oplus'>&oplus;</span>GO</h2>
                <div className="header_btn_div text_color">
                    <button className='header_btn'>NEW</button>
                    <button className='header_btn'>Sale</button>
                    <button className='header_btn'>FAQ</button>
                    <button className='header_btn'>Contacts</button>
                </div>
            </div>
            <div className='slogan_div'>
                <h2 className='slogan'> * YOUR BEST CHOICE * WINTER SALE * NEW ARRIVALS *</h2>
            </div>
        </div>
    )
}

export default Header
