import {React, useRef} from 'react'
import './Header.css'
import {ReactComponent as Info} from '../../Icons/info.svg'

const Header = () => {
    const hamburger = useRef()
    const openMenu = () => {
        if(hamburger) {
            hamburger.current.classList.toggle('active')
        }
    }
    // const closeMenu = () => {
    //     if(hamburger) {
    //         hamburger.current.classList.remove('active')
    //     }
    // }

    return (
        <div className='header'>
            <div ref={hamburger} onClick={openMenu} className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
            <h2>"Daily Words"</h2>
            <Info />
        </div>
    )
}

export default Header
